import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation, } from '@angular/core';
// @ts-ignore
import Swiper from 'swiper';
import { of, Subject } from 'rxjs';
import { getParams } from './utils/get-params';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { extend, isObject, setProperty, ignoreNgOnChanges, coerceBooleanProperty, isShowEl, } from './utils/utils';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true;
        // prettier-ignore
        this.s__beforeBreakpoint = new EventEmitter();
        // prettier-ignore
        this.s__containerClasses = new EventEmitter();
        // prettier-ignore
        this.s__slideClass = new EventEmitter();
        // prettier-ignore
        this.s__swiper = new EventEmitter();
        // prettier-ignore
        this.s_activeIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_afterInit = new EventEmitter();
        // prettier-ignore
        this.s_autoplay = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStart = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStop = new EventEmitter();
        // prettier-ignore
        this.s_beforeDestroy = new EventEmitter();
        // prettier-ignore
        this.s_beforeInit = new EventEmitter();
        // prettier-ignore
        this.s_beforeLoopFix = new EventEmitter();
        // prettier-ignore
        this.s_beforeResize = new EventEmitter();
        // prettier-ignore
        this.s_beforeSlideChangeStart = new EventEmitter();
        // prettier-ignore
        this.s_beforeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_breakpoint = new EventEmitter();
        // prettier-ignore
        this.s_changeDirection = new EventEmitter();
        // prettier-ignore
        this.s_click = new EventEmitter();
        // prettier-ignore
        this.s_doubleTap = new EventEmitter();
        // prettier-ignore
        this.s_doubleClick = new EventEmitter();
        // prettier-ignore
        this.s_destroy = new EventEmitter();
        // prettier-ignore
        this.s_fromEdge = new EventEmitter();
        // prettier-ignore
        this.s_hashChange = new EventEmitter();
        // prettier-ignore
        this.s_hashSet = new EventEmitter();
        // prettier-ignore
        this.s_imagesReady = new EventEmitter();
        // prettier-ignore
        this.s_init = new EventEmitter();
        // prettier-ignore
        this.s_keyPress = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageLoad = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageReady = new EventEmitter();
        // prettier-ignore
        this.s_loopFix = new EventEmitter();
        // prettier-ignore
        this.s_momentumBounce = new EventEmitter();
        // prettier-ignore
        this.s_navigationHide = new EventEmitter();
        // prettier-ignore
        this.s_navigationShow = new EventEmitter();
        // prettier-ignore
        this.s_observerUpdate = new EventEmitter();
        // prettier-ignore
        this.s_orientationchange = new EventEmitter();
        // prettier-ignore
        this.s_paginationHide = new EventEmitter();
        // prettier-ignore
        this.s_paginationRender = new EventEmitter();
        // prettier-ignore
        this.s_paginationShow = new EventEmitter();
        // prettier-ignore
        this.s_paginationUpdate = new EventEmitter();
        // prettier-ignore
        this.s_progress = new EventEmitter();
        // prettier-ignore
        this.s_reachBeginning = new EventEmitter();
        // prettier-ignore
        this.s_reachEnd = new EventEmitter();
        // prettier-ignore
        this.s_realIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_resize = new EventEmitter();
        // prettier-ignore
        this.s_scroll = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragEnd = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragMove = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragStart = new EventEmitter();
        // prettier-ignore
        this.s_setTransition = new EventEmitter();
        // prettier-ignore
        this.s_setTranslate = new EventEmitter();
        // prettier-ignore
        this.s_slideChange = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_sliderMove = new EventEmitter();
        // prettier-ignore
        this.s_sliderFirstMove = new EventEmitter();
        // prettier-ignore
        this.s_slidesLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_slidesGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_tap = new EventEmitter();
        // prettier-ignore
        this.s_toEdge = new EventEmitter();
        // prettier-ignore
        this.s_touchEnd = new EventEmitter();
        // prettier-ignore
        this.s_touchMove = new EventEmitter();
        // prettier-ignore
        this.s_touchMoveOpposite = new EventEmitter();
        // prettier-ignore
        this.s_touchStart = new EventEmitter();
        // prettier-ignore
        this.s_transitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_transitionStart = new EventEmitter();
        // prettier-ignore
        this.s_update = new EventEmitter();
        // prettier-ignore
        this.s_zoomChange = new EventEmitter();
        // prettier-ignore
        this.s_lock = new EventEmitter();
        // prettier-ignore
        this.s_unlock = new EventEmitter();
        // prettier-ignore
        this.s_swiper = new EventEmitter();
        this.indexChange = new EventEmitter();
        this._activeSlides = new Subject();
        this.containerClasses = 'swiper';
        this.slidesChanges = (val) => {
            this.slides = val.map((slide, index) => {
                slide.slideIndex = index;
                slide.classNames = this.slideClass || '';
                return slide;
            });
            if (this.loop && !this.loopedSlides) {
                this.calcLoopedSlides();
            }
            if (!this.virtual) {
                if (this.loopedSlides) {
                    this.prependSlides = of(this.slides.slice(this.slides.length - this.loopedSlides));
                    this.appendSlides = of(this.slides.slice(0, this.loopedSlides));
                }
            }
            else if (this.swiperRef && this.swiperRef.virtual) {
                this._ngZone.runOutsideAngular(() => {
                    this.swiperRef.virtual.slides = this.slides;
                    this.swiperRef.virtual.update(true);
                });
            }
            this._changeDetectorRef.detectChanges();
        };
        this.style = null;
        this.updateVirtualSlides = (virtualData) => {
            // TODO: type virtualData
            if (!this.swiperRef ||
                (this.currentVirtualData &&
                    this.currentVirtualData.from === virtualData.from &&
                    this.currentVirtualData.to === virtualData.to &&
                    this.currentVirtualData.offset === virtualData.offset)) {
                return;
            }
            this.style = this.swiperRef.isHorizontal()
                ? {
                    [this.swiperRef.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`,
                }
                : {
                    top: `${virtualData.offset}px`,
                };
            this.currentVirtualData = virtualData;
            this._activeSlides.next(virtualData.slides);
            this._ngZone.run(() => {
                this._changeDetectorRef.detectChanges();
            });
            this._ngZone.runOutsideAngular(() => {
                this.swiperRef.updateSlides();
                this.swiperRef.updateProgress();
                this.swiperRef.updateSlidesClasses();
                if (this.swiperRef.lazy && this.swiperRef.params.lazy['enabled']) {
                    this.swiperRef.lazy.load();
                }
                this.swiperRef.virtual.update(true);
            });
            return;
        };
    }
    set navigation(val) {
        var _a, _b, _c;
        const currentNext = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl
            : null;
        const currentPrev = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl
            : null;
        this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null,
        });
        this.showNavigation = !(coerceBooleanProperty(val) !== true ||
            (this._navigation &&
                typeof this._navigation !== 'boolean' &&
                this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
                (this._navigation.prevEl !== null || this._navigation.nextEl !== null) &&
                (typeof this._navigation.nextEl === 'string' ||
                    typeof this._navigation.prevEl === 'string' ||
                    typeof this._navigation.nextEl === 'object' ||
                    typeof this._navigation.prevEl === 'object')));
    }
    get navigation() {
        return this._navigation;
    }
    set pagination(val) {
        var _a;
        const current = typeof this._pagination !== 'boolean' && this._pagination !== ''
            ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el
            : null;
        this._pagination = setProperty(val, {
            el: current || null,
        });
        this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
    }
    get pagination() {
        return this._pagination;
    }
    set scrollbar(val) {
        var _a;
        const current = typeof this._scrollbar !== 'boolean' && this._scrollbar !== '' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
        this._scrollbar = setProperty(val, {
            el: current || null,
        });
        this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
    }
    get scrollbar() {
        return this._scrollbar;
    }
    set virtual(val) {
        this._virtual = setProperty(val);
    }
    get virtual() {
        return this._virtual;
    }
    set index(index) {
        console.warn('`[(index)]` prop is deprecated and will be removed in upcoming versions');
        this.setIndex(index);
    }
    set config(val) {
        this.updateSwiper(val);
        const { params } = getParams(val);
        Object.assign(this, params);
    }
    set prevElRef(el) {
        this._prevElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'prevEl');
    }
    set nextElRef(el) {
        this._nextElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'nextEl');
    }
    set scrollbarElRef(el) {
        this._scrollbarElRef = el;
        this._setElement(el, this.scrollbar, 'scrollbar');
    }
    set paginationElRef(el) {
        this._paginationElRef = el;
        this._setElement(el, this.pagination, 'pagination');
    }
    get activeSlides() {
        if (this.virtual) {
            return this._activeSlides;
        }
        return of(this.slides);
    }
    get zoomContainerClass() {
        return this.zoom && typeof this.zoom !== 'boolean'
            ? this.zoom.containerClass
            : 'swiper-zoom-container';
    }
    _setElement(el, ref, update, key = 'el') {
        if (!el || !ref) {
            return;
        }
        if (ref && el.nativeElement) {
            if (ref[key] === el.nativeElement) {
                return;
            }
            ref[key] = el.nativeElement;
        }
        const updateObj = {};
        updateObj[update] = true;
        this.updateInitSwiper(updateObj);
    }
    ngOnInit() {
        const { params } = getParams(this);
        Object.assign(this, params);
    }
    ngAfterViewInit() {
        this.childrenSlidesInit();
        this.initSwiper();
        this._changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.s_swiper.emit(this.swiperRef);
        });
    }
    childrenSlidesInit() {
        this.slidesChanges(this.slidesEl);
        this.slidesEl.changes.subscribe(this.slidesChanges);
    }
    get isSwiperActive() {
        return this.swiperRef && !this.swiperRef.destroyed;
    }
    initSwiper() {
        const { params: swiperParams, passedParams } = getParams(this);
        Object.assign(this, swiperParams);
        this._ngZone.runOutsideAngular(() => {
            swiperParams.init = false;
            if (!swiperParams.virtual) {
                swiperParams.observer = true;
            }
            swiperParams.onAny = (eventName, ...args) => {
                const emitter = this[('s_' + eventName)];
                if (emitter) {
                    emitter.emit(...args);
                }
            };
            const _slideClasses = (_, updated) => {
                updated.forEach(({ slideEl, classNames }, index) => {
                    const dataIndex = slideEl.getAttribute('data-swiper-slide-index');
                    const slideIndex = dataIndex ? parseInt(dataIndex) : index;
                    if (this.virtual) {
                        const virtualSlide = this.slides.find((item) => {
                            return item.virtualIndex && item.virtualIndex === slideIndex;
                        });
                        if (virtualSlide) {
                            virtualSlide.classNames = classNames;
                            return;
                        }
                    }
                    if (this.slides[slideIndex]) {
                        this.slides[slideIndex].classNames = classNames;
                    }
                });
                this._changeDetectorRef.detectChanges();
            };
            const _containerClasses = (_, classes) => {
                setTimeout(() => {
                    this.containerClasses = classes;
                });
            };
            Object.assign(swiperParams.on, {
                _containerClasses,
                _slideClasses,
            });
            const swiperRef = new Swiper(swiperParams);
            swiperRef.loopCreate = () => { };
            swiperRef.loopDestroy = () => { };
            if (swiperParams.loop) {
                swiperRef.loopedSlides = this.loopedSlides;
            }
            const isVirtualEnabled = typeof swiperRef.params.virtual !== 'undefined' &&
                typeof swiperRef.params.virtual !== 'boolean' &&
                swiperRef.params.virtual.enabled;
            if (swiperRef.virtual && isVirtualEnabled) {
                swiperRef.virtual.slides = this.slides;
                const extendWith = {
                    cache: false,
                    slides: this.slides,
                    renderExternal: this.updateVirtualSlides,
                    renderExternalUpdate: false,
                };
                extend(swiperRef.params.virtual, extendWith);
                extend(swiperRef.originalParams.virtual, extendWith);
            }
            if (isPlatformBrowser(this._platformId)) {
                this.swiperRef = swiperRef.init(this.elementRef.nativeElement);
                const isEnabled = typeof this.swiperRef.params.virtual !== 'undefined' &&
                    typeof this.swiperRef.params.virtual !== 'boolean' &&
                    this.swiperRef.params.virtual.enabled;
                if (this.swiperRef.virtual && isEnabled) {
                    this.swiperRef.virtual.update(true);
                }
                this._changeDetectorRef.detectChanges();
                swiperRef.on('slideChange', () => {
                    this.indexChange.emit(this.swiperRef.realIndex);
                });
            }
        });
    }
    ngOnChanges(changedParams) {
        this.updateSwiper(changedParams);
        this._changeDetectorRef.detectChanges();
    }
    updateInitSwiper(changedParams) {
        if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs, } = this.swiperRef;
            if (changedParams.pagination) {
                if (this.pagination &&
                    typeof this.pagination !== 'boolean' &&
                    this.pagination.el &&
                    pagination &&
                    !pagination.el) {
                    this.updateParameter('pagination', this.pagination);
                    pagination.init();
                    pagination.render();
                    pagination.update();
                }
                else {
                    pagination.destroy();
                    pagination.el = null;
                }
            }
            if (changedParams.scrollbar) {
                if (this.scrollbar &&
                    typeof this.scrollbar !== 'boolean' &&
                    this.scrollbar.el &&
                    scrollbar &&
                    !scrollbar.el) {
                    this.updateParameter('scrollbar', this.scrollbar);
                    scrollbar.init();
                    scrollbar.updateSize();
                    scrollbar.setTranslate();
                }
                else {
                    scrollbar.destroy();
                    scrollbar.el = null;
                }
            }
            if (changedParams.navigation) {
                if (this.navigation &&
                    typeof this.navigation !== 'boolean' &&
                    this.navigation.prevEl &&
                    this.navigation.nextEl &&
                    navigation &&
                    !navigation.prevEl &&
                    !navigation.nextEl) {
                    this.updateParameter('navigation', this.navigation);
                    navigation.init();
                    navigation.update();
                }
                else if (navigation.prevEl && navigation.nextEl) {
                    navigation.destroy();
                    navigation.nextEl = null;
                    navigation.prevEl = null;
                }
            }
            if (changedParams.thumbs && this.thumbs && this.thumbs.swiper) {
                this.updateParameter('thumbs', this.thumbs);
                const initialized = thumbs.init();
                if (initialized)
                    thumbs.update(true);
            }
            if (changedParams.controller && this.controller && this.controller.control) {
                this.swiperRef.controller.control = this.controller.control;
            }
            this.swiperRef.update();
        });
    }
    updateSwiper(changedParams) {
        this._ngZone.runOutsideAngular(() => {
            var _a, _b;
            if (changedParams.config) {
                return;
            }
            if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
                return;
            }
            for (const key in changedParams) {
                if (ignoreNgOnChanges.indexOf(key) >= 0) {
                    continue;
                }
                const newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];
                this.updateParameter(key, newValue);
            }
            if (changedParams.allowSlideNext) {
                this.swiperRef.allowSlideNext = this.allowSlideNext;
            }
            if (changedParams.allowSlidePrev) {
                this.swiperRef.allowSlidePrev = this.allowSlidePrev;
            }
            if (changedParams.direction) {
                this.swiperRef.changeDirection(this.direction, false);
            }
            if (changedParams.breakpoints) {
                if (this.loop && !this.loopedSlides) {
                    this.calcLoopedSlides();
                }
                this.swiperRef.currentBreakpoint = null;
                this.swiperRef.setBreakpoint();
            }
            if (changedParams.thumbs || changedParams.controller) {
                this.updateInitSwiper(changedParams);
            }
            this.swiperRef.update();
        });
    }
    calcLoopedSlides() {
        if (!this.loop) {
            return;
        }
        let slidesPerViewParams = this.slidesPerView;
        if (this.breakpoints) {
            const breakpoint = Swiper.prototype.getBreakpoint(this.breakpoints);
            const breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
                slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
        }
        if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
        }
        let loopedSlides = this.loopedSlides || slidesPerViewParams;
        if (!loopedSlides) {
            // ?
            return;
        }
        if (this.loopAdditionalSlides) {
            loopedSlides += this.loopAdditionalSlides;
        }
        if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
        }
        this.loopedSlides = loopedSlides;
        return loopedSlides;
    }
    updateParameter(key, value) {
        if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        const _key = key.replace(/^_/, '');
        const isCurrentParamObj = isObject(this.swiperRef.params[_key]);
        if (Object.keys(this.swiperRef.modules).indexOf(_key) >= 0) {
            const defaultParams = this.swiperRef.modules[_key].params[_key];
            if (isCurrentParamObj) {
                extend(this.swiperRef.params[_key], defaultParams);
            }
            else {
                this.swiperRef.params[_key] = defaultParams;
            }
        }
        if (_key === 'enabled') {
            if (value === true) {
                this.swiperRef.enable();
            }
            else if (value === false) {
                this.swiperRef.disable();
            }
            return;
        }
        if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
        }
        else {
            this.swiperRef.params[_key] = value;
        }
    }
    /**
     * @deprecated will be removed in upcoming versions
     */
    setIndex(index, speed, silent) {
        if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
        }
        if (index === this.swiperRef.activeIndex) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            if (this.loop) {
                this.swiperRef.slideToLoop(index, speed, !silent);
            }
            else {
                this.swiperRef.slideTo(index, speed, !silent);
            }
        });
    }
    ngOnDestroy() {
        this._ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
        });
    }
}
SwiperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
SwiperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: SwiperComponent, selector: "swiper, [swiper]", inputs: { enabled: "enabled", direction: "direction", touchEventsTarget: "touchEventsTarget", initialSlide: "initialSlide", speed: "speed", cssMode: "cssMode", updateOnWindowResize: "updateOnWindowResize", resizeObserver: "resizeObserver", nested: "nested", focusableElements: "focusableElements", width: "width", height: "height", preventInteractionOnTransition: "preventInteractionOnTransition", userAgent: "userAgent", url: "url", edgeSwipeDetection: "edgeSwipeDetection", edgeSwipeThreshold: "edgeSwipeThreshold", freeMode: "freeMode", autoHeight: "autoHeight", setWrapperSize: "setWrapperSize", virtualTranslate: "virtualTranslate", effect: "effect", breakpoints: "breakpoints", spaceBetween: "spaceBetween", slidesPerView: "slidesPerView", grid: "grid", slidesPerGroup: "slidesPerGroup", slidesPerGroupSkip: "slidesPerGroupSkip", centeredSlides: "centeredSlides", centeredSlidesBounds: "centeredSlidesBounds", slidesOffsetBefore: "slidesOffsetBefore", slidesOffsetAfter: "slidesOffsetAfter", normalizeSlideIndex: "normalizeSlideIndex", centerInsufficientSlides: "centerInsufficientSlides", watchOverflow: "watchOverflow", roundLengths: "roundLengths", touchRatio: "touchRatio", touchAngle: "touchAngle", simulateTouch: "simulateTouch", shortSwipes: "shortSwipes", longSwipes: "longSwipes", longSwipesRatio: "longSwipesRatio", longSwipesMs: "longSwipesMs", followFinger: "followFinger", allowTouchMove: "allowTouchMove", threshold: "threshold", touchMoveStopPropagation: "touchMoveStopPropagation", touchStartPreventDefault: "touchStartPreventDefault", touchStartForcePreventDefault: "touchStartForcePreventDefault", touchReleaseOnEdges: "touchReleaseOnEdges", uniqueNavElements: "uniqueNavElements", resistance: "resistance", resistanceRatio: "resistanceRatio", watchSlidesProgress: "watchSlidesProgress", grabCursor: "grabCursor", preventClicks: "preventClicks", preventClicksPropagation: "preventClicksPropagation", slideToClickedSlide: "slideToClickedSlide", preloadImages: "preloadImages", updateOnImagesReady: "updateOnImagesReady", loop: "loop", loopAdditionalSlides: "loopAdditionalSlides", loopedSlides: "loopedSlides", loopFillGroupWithBlank: "loopFillGroupWithBlank", loopPreventsSlide: "loopPreventsSlide", allowSlidePrev: "allowSlidePrev", allowSlideNext: "allowSlideNext", swipeHandler: "swipeHandler", noSwiping: "noSwiping", noSwipingClass: "noSwipingClass", noSwipingSelector: "noSwipingSelector", passiveListeners: "passiveListeners", containerModifierClass: "containerModifierClass", slideClass: "slideClass", slideBlankClass: "slideBlankClass", slideActiveClass: "slideActiveClass", slideDuplicateActiveClass: "slideDuplicateActiveClass", slideVisibleClass: "slideVisibleClass", slideDuplicateClass: "slideDuplicateClass", slideNextClass: "slideNextClass", slideDuplicateNextClass: "slideDuplicateNextClass", slidePrevClass: "slidePrevClass", slideDuplicatePrevClass: "slideDuplicatePrevClass", wrapperClass: "wrapperClass", runCallbacksOnInit: "runCallbacksOnInit", observeParents: "observeParents", observeSlideChildren: "observeSlideChildren", a11y: "a11y", autoplay: "autoplay", controller: "controller", coverflowEffect: "coverflowEffect", cubeEffect: "cubeEffect", fadeEffect: "fadeEffect", flipEffect: "flipEffect", creativeEffect: "creativeEffect", cardsEffect: "cardsEffect", hashNavigation: "hashNavigation", history: "history", keyboard: "keyboard", lazy: "lazy", mousewheel: "mousewheel", parallax: "parallax", thumbs: "thumbs", zoom: "zoom", class: "class", id: "id", navigation: "navigation", pagination: "pagination", scrollbar: "scrollbar", virtual: "virtual", index: "index", config: "config" }, outputs: { s__beforeBreakpoint: "_beforeBreakpoint", s__containerClasses: "_containerClasses", s__slideClass: "_slideClass", s__swiper: "_swiper", s_activeIndexChange: "activeIndexChange", s_afterInit: "afterInit", s_autoplay: "autoplay", s_autoplayStart: "autoplayStart", s_autoplayStop: "autoplayStop", s_beforeDestroy: "beforeDestroy", s_beforeInit: "beforeInit", s_beforeLoopFix: "beforeLoopFix", s_beforeResize: "beforeResize", s_beforeSlideChangeStart: "beforeSlideChangeStart", s_beforeTransitionStart: "beforeTransitionStart", s_breakpoint: "breakpoint", s_changeDirection: "changeDirection", s_click: "click", s_doubleTap: "doubleTap", s_doubleClick: "doubleClick", s_destroy: "destroy", s_fromEdge: "fromEdge", s_hashChange: "hashChange", s_hashSet: "hashSet", s_imagesReady: "imagesReady", s_init: "init", s_keyPress: "keyPress", s_lazyImageLoad: "lazyImageLoad", s_lazyImageReady: "lazyImageReady", s_loopFix: "loopFix", s_momentumBounce: "momentumBounce", s_navigationHide: "navigationHide", s_navigationShow: "navigationShow", s_observerUpdate: "observerUpdate", s_orientationchange: "orientationchange", s_paginationHide: "paginationHide", s_paginationRender: "paginationRender", s_paginationShow: "paginationShow", s_paginationUpdate: "paginationUpdate", s_progress: "progress", s_reachBeginning: "reachBeginning", s_reachEnd: "reachEnd", s_realIndexChange: "realIndexChange", s_resize: "resize", s_scroll: "scroll", s_scrollbarDragEnd: "scrollbarDragEnd", s_scrollbarDragMove: "scrollbarDragMove", s_scrollbarDragStart: "scrollbarDragStart", s_setTransition: "setTransition", s_setTranslate: "setTranslate", s_slideChange: "slideChange", s_slideChangeTransitionEnd: "slideChangeTransitionEnd", s_slideChangeTransitionStart: "slideChangeTransitionStart", s_slideNextTransitionEnd: "slideNextTransitionEnd", s_slideNextTransitionStart: "slideNextTransitionStart", s_slidePrevTransitionEnd: "slidePrevTransitionEnd", s_slidePrevTransitionStart: "slidePrevTransitionStart", s_slideResetTransitionStart: "slideResetTransitionStart", s_slideResetTransitionEnd: "slideResetTransitionEnd", s_sliderMove: "sliderMove", s_sliderFirstMove: "sliderFirstMove", s_slidesLengthChange: "slidesLengthChange", s_slidesGridLengthChange: "slidesGridLengthChange", s_snapGridLengthChange: "snapGridLengthChange", s_snapIndexChange: "snapIndexChange", s_tap: "tap", s_toEdge: "toEdge", s_touchEnd: "touchEnd", s_touchMove: "touchMove", s_touchMoveOpposite: "touchMoveOpposite", s_touchStart: "touchStart", s_transitionEnd: "transitionEnd", s_transitionStart: "transitionStart", s_update: "update", s_zoomChange: "zoomChange", s_lock: "lock", s_unlock: "unlock", s_swiper: "swiper", indexChange: "indexChange" }, host: { properties: { "class": "this.containerClasses" } }, queries: [{ propertyName: "slidesEl", predicate: SwiperSlideDirective }], viewQueries: [{ propertyName: "prevElRef", first: true, predicate: ["prevElRef"], descendants: true }, { propertyName: "nextElRef", first: true, predicate: ["nextElRef"], descendants: true }, { propertyName: "scrollbarElRef", first: true, predicate: ["scrollbarElRef"], descendants: true }, { propertyName: "paginationElRef", first: true, predicate: ["paginationElRef"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"[slot=container-start]\"></ng-content>\n<ng-container *ngIf=\"navigation && showNavigation\">\n  <div class=\"swiper-button-prev\" #prevElRef></div>\n  <div class=\"swiper-button-next\" #nextElRef></div>\n</ng-container>\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: prependSlides,\n        key: 'prepend'\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: activeSlides,\n        key: ''\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: appendSlides,\n        key: 'append'\n      }\n    \"\n  ></ng-template>\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\n</div>\n<ng-content select=\"[slot=container-end]\"></ng-content>\n\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\n  <div\n    *ngFor=\"let slide of loopSlides | async\"\n    [ngClass]=\"\n      (slide.class ? slide.class + ' ' : '') +\n      slideClass +\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\n    \"\n    [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\"\n    [attr.data-swiper-autoplay]=\"slide.autoplayDelay\"\n    [style]=\"style\"\n    [ngSwitch]=\"slide.zoom\"\n  >\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </div>\n    <ng-container *ngSwitchDefault>\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n", styles: ["\n      swiper {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swiper, [swiper]',
                    templateUrl: './swiper.component.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        `
      swiper {
        display: block;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { enabled: [{
                type: Input
            }], direction: [{
                type: Input
            }], touchEventsTarget: [{
                type: Input
            }], initialSlide: [{
                type: Input
            }], speed: [{
                type: Input
            }], cssMode: [{
                type: Input
            }], updateOnWindowResize: [{
                type: Input
            }], resizeObserver: [{
                type: Input
            }], nested: [{
                type: Input
            }], focusableElements: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], preventInteractionOnTransition: [{
                type: Input
            }], userAgent: [{
                type: Input
            }], url: [{
                type: Input
            }], edgeSwipeDetection: [{
                type: Input
            }], edgeSwipeThreshold: [{
                type: Input
            }], freeMode: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], setWrapperSize: [{
                type: Input
            }], virtualTranslate: [{
                type: Input
            }], effect: [{
                type: Input
            }], breakpoints: [{
                type: Input
            }], spaceBetween: [{
                type: Input
            }], slidesPerView: [{
                type: Input
            }], grid: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], slidesPerGroupSkip: [{
                type: Input
            }], centeredSlides: [{
                type: Input
            }], centeredSlidesBounds: [{
                type: Input
            }], slidesOffsetBefore: [{
                type: Input
            }], slidesOffsetAfter: [{
                type: Input
            }], normalizeSlideIndex: [{
                type: Input
            }], centerInsufficientSlides: [{
                type: Input
            }], watchOverflow: [{
                type: Input
            }], roundLengths: [{
                type: Input
            }], touchRatio: [{
                type: Input
            }], touchAngle: [{
                type: Input
            }], simulateTouch: [{
                type: Input
            }], shortSwipes: [{
                type: Input
            }], longSwipes: [{
                type: Input
            }], longSwipesRatio: [{
                type: Input
            }], longSwipesMs: [{
                type: Input
            }], followFinger: [{
                type: Input
            }], allowTouchMove: [{
                type: Input
            }], threshold: [{
                type: Input
            }], touchMoveStopPropagation: [{
                type: Input
            }], touchStartPreventDefault: [{
                type: Input
            }], touchStartForcePreventDefault: [{
                type: Input
            }], touchReleaseOnEdges: [{
                type: Input
            }], uniqueNavElements: [{
                type: Input
            }], resistance: [{
                type: Input
            }], resistanceRatio: [{
                type: Input
            }], watchSlidesProgress: [{
                type: Input
            }], grabCursor: [{
                type: Input
            }], preventClicks: [{
                type: Input
            }], preventClicksPropagation: [{
                type: Input
            }], slideToClickedSlide: [{
                type: Input
            }], preloadImages: [{
                type: Input
            }], updateOnImagesReady: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopAdditionalSlides: [{
                type: Input
            }], loopedSlides: [{
                type: Input
            }], loopFillGroupWithBlank: [{
                type: Input
            }], loopPreventsSlide: [{
                type: Input
            }], allowSlidePrev: [{
                type: Input
            }], allowSlideNext: [{
                type: Input
            }], swipeHandler: [{
                type: Input
            }], noSwiping: [{
                type: Input
            }], noSwipingClass: [{
                type: Input
            }], noSwipingSelector: [{
                type: Input
            }], passiveListeners: [{
                type: Input
            }], containerModifierClass: [{
                type: Input
            }], slideClass: [{
                type: Input
            }], slideBlankClass: [{
                type: Input
            }], slideActiveClass: [{
                type: Input
            }], slideDuplicateActiveClass: [{
                type: Input
            }], slideVisibleClass: [{
                type: Input
            }], slideDuplicateClass: [{
                type: Input
            }], slideNextClass: [{
                type: Input
            }], slideDuplicateNextClass: [{
                type: Input
            }], slidePrevClass: [{
                type: Input
            }], slideDuplicatePrevClass: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], runCallbacksOnInit: [{
                type: Input
            }], observeParents: [{
                type: Input
            }], observeSlideChildren: [{
                type: Input
            }], a11y: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], controller: [{
                type: Input
            }], coverflowEffect: [{
                type: Input
            }], cubeEffect: [{
                type: Input
            }], fadeEffect: [{
                type: Input
            }], flipEffect: [{
                type: Input
            }], creativeEffect: [{
                type: Input
            }], cardsEffect: [{
                type: Input
            }], hashNavigation: [{
                type: Input
            }], history: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], lazy: [{
                type: Input
            }], mousewheel: [{
                type: Input
            }], parallax: [{
                type: Input
            }], thumbs: [{
                type: Input
            }], zoom: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], navigation: [{
                type: Input
            }], pagination: [{
                type: Input
            }], scrollbar: [{
                type: Input
            }], virtual: [{
                type: Input
            }], index: [{
                type: Input
            }], config: [{
                type: Input
            }], s__beforeBreakpoint: [{
                type: Output,
                args: ['_beforeBreakpoint']
            }], s__containerClasses: [{
                type: Output,
                args: ['_containerClasses']
            }], s__slideClass: [{
                type: Output,
                args: ['_slideClass']
            }], s__swiper: [{
                type: Output,
                args: ['_swiper']
            }], s_activeIndexChange: [{
                type: Output,
                args: ['activeIndexChange']
            }], s_afterInit: [{
                type: Output,
                args: ['afterInit']
            }], s_autoplay: [{
                type: Output,
                args: ['autoplay']
            }], s_autoplayStart: [{
                type: Output,
                args: ['autoplayStart']
            }], s_autoplayStop: [{
                type: Output,
                args: ['autoplayStop']
            }], s_beforeDestroy: [{
                type: Output,
                args: ['beforeDestroy']
            }], s_beforeInit: [{
                type: Output,
                args: ['beforeInit']
            }], s_beforeLoopFix: [{
                type: Output,
                args: ['beforeLoopFix']
            }], s_beforeResize: [{
                type: Output,
                args: ['beforeResize']
            }], s_beforeSlideChangeStart: [{
                type: Output,
                args: ['beforeSlideChangeStart']
            }], s_beforeTransitionStart: [{
                type: Output,
                args: ['beforeTransitionStart']
            }], s_breakpoint: [{
                type: Output,
                args: ['breakpoint']
            }], s_changeDirection: [{
                type: Output,
                args: ['changeDirection']
            }], s_click: [{
                type: Output,
                args: ['click']
            }], s_doubleTap: [{
                type: Output,
                args: ['doubleTap']
            }], s_doubleClick: [{
                type: Output,
                args: ['doubleClick']
            }], s_destroy: [{
                type: Output,
                args: ['destroy']
            }], s_fromEdge: [{
                type: Output,
                args: ['fromEdge']
            }], s_hashChange: [{
                type: Output,
                args: ['hashChange']
            }], s_hashSet: [{
                type: Output,
                args: ['hashSet']
            }], s_imagesReady: [{
                type: Output,
                args: ['imagesReady']
            }], s_init: [{
                type: Output,
                args: ['init']
            }], s_keyPress: [{
                type: Output,
                args: ['keyPress']
            }], s_lazyImageLoad: [{
                type: Output,
                args: ['lazyImageLoad']
            }], s_lazyImageReady: [{
                type: Output,
                args: ['lazyImageReady']
            }], s_loopFix: [{
                type: Output,
                args: ['loopFix']
            }], s_momentumBounce: [{
                type: Output,
                args: ['momentumBounce']
            }], s_navigationHide: [{
                type: Output,
                args: ['navigationHide']
            }], s_navigationShow: [{
                type: Output,
                args: ['navigationShow']
            }], s_observerUpdate: [{
                type: Output,
                args: ['observerUpdate']
            }], s_orientationchange: [{
                type: Output,
                args: ['orientationchange']
            }], s_paginationHide: [{
                type: Output,
                args: ['paginationHide']
            }], s_paginationRender: [{
                type: Output,
                args: ['paginationRender']
            }], s_paginationShow: [{
                type: Output,
                args: ['paginationShow']
            }], s_paginationUpdate: [{
                type: Output,
                args: ['paginationUpdate']
            }], s_progress: [{
                type: Output,
                args: ['progress']
            }], s_reachBeginning: [{
                type: Output,
                args: ['reachBeginning']
            }], s_reachEnd: [{
                type: Output,
                args: ['reachEnd']
            }], s_realIndexChange: [{
                type: Output,
                args: ['realIndexChange']
            }], s_resize: [{
                type: Output,
                args: ['resize']
            }], s_scroll: [{
                type: Output,
                args: ['scroll']
            }], s_scrollbarDragEnd: [{
                type: Output,
                args: ['scrollbarDragEnd']
            }], s_scrollbarDragMove: [{
                type: Output,
                args: ['scrollbarDragMove']
            }], s_scrollbarDragStart: [{
                type: Output,
                args: ['scrollbarDragStart']
            }], s_setTransition: [{
                type: Output,
                args: ['setTransition']
            }], s_setTranslate: [{
                type: Output,
                args: ['setTranslate']
            }], s_slideChange: [{
                type: Output,
                args: ['slideChange']
            }], s_slideChangeTransitionEnd: [{
                type: Output,
                args: ['slideChangeTransitionEnd']
            }], s_slideChangeTransitionStart: [{
                type: Output,
                args: ['slideChangeTransitionStart']
            }], s_slideNextTransitionEnd: [{
                type: Output,
                args: ['slideNextTransitionEnd']
            }], s_slideNextTransitionStart: [{
                type: Output,
                args: ['slideNextTransitionStart']
            }], s_slidePrevTransitionEnd: [{
                type: Output,
                args: ['slidePrevTransitionEnd']
            }], s_slidePrevTransitionStart: [{
                type: Output,
                args: ['slidePrevTransitionStart']
            }], s_slideResetTransitionStart: [{
                type: Output,
                args: ['slideResetTransitionStart']
            }], s_slideResetTransitionEnd: [{
                type: Output,
                args: ['slideResetTransitionEnd']
            }], s_sliderMove: [{
                type: Output,
                args: ['sliderMove']
            }], s_sliderFirstMove: [{
                type: Output,
                args: ['sliderFirstMove']
            }], s_slidesLengthChange: [{
                type: Output,
                args: ['slidesLengthChange']
            }], s_slidesGridLengthChange: [{
                type: Output,
                args: ['slidesGridLengthChange']
            }], s_snapGridLengthChange: [{
                type: Output,
                args: ['snapGridLengthChange']
            }], s_snapIndexChange: [{
                type: Output,
                args: ['snapIndexChange']
            }], s_tap: [{
                type: Output,
                args: ['tap']
            }], s_toEdge: [{
                type: Output,
                args: ['toEdge']
            }], s_touchEnd: [{
                type: Output,
                args: ['touchEnd']
            }], s_touchMove: [{
                type: Output,
                args: ['touchMove']
            }], s_touchMoveOpposite: [{
                type: Output,
                args: ['touchMoveOpposite']
            }], s_touchStart: [{
                type: Output,
                args: ['touchStart']
            }], s_transitionEnd: [{
                type: Output,
                args: ['transitionEnd']
            }], s_transitionStart: [{
                type: Output,
                args: ['transitionStart']
            }], s_update: [{
                type: Output,
                args: ['update']
            }], s_zoomChange: [{
                type: Output,
                args: ['zoomChange']
            }], s_lock: [{
                type: Output,
                args: ['lock']
            }], s_unlock: [{
                type: Output,
                args: ['unlock']
            }], s_swiper: [{
                type: Output,
                args: ['swiper']
            }], indexChange: [{
                type: Output
            }], prevElRef: [{
                type: ViewChild,
                args: ['prevElRef', { static: false }]
            }], nextElRef: [{
                type: ViewChild,
                args: ['nextElRef', { static: false }]
            }], scrollbarElRef: [{
                type: ViewChild,
                args: ['scrollbarElRef', { static: false }]
            }], paginationElRef: [{
                type: ViewChild,
                args: ['paginationElRef', { static: false }]
            }], slidesEl: [{
                type: ContentChildren,
                args: [SwiperSlideDirective, { descendants: false, emitDistinctChangesOnly: true }]
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvc3JjL3N3aXBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sZUFBZTtJQThZMUIsWUFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsa0JBQXFDLEVBQ2hCLFdBQW1CO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUF4VXpDLGVBQVUsR0FBZ0MsY0FBYyxDQUFDO1FBVXpELGlCQUFZLEdBQWtD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QU07dUJBQUMsTUFBTTtnQkFFSSxRQUFRO3NCQUF6QixNQUFNO3VCQUFDLFFBQVE7Z0JBRUUsUUFBUTtzQkFBekIsTUFBTTt1QkFBQyxRQUFRO2dCQUVOLFdBQVc7c0JBQXBCLE1BQU07Z0JBR0gsU0FBUztzQkFEWixTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBT3JDLFNBQVM7c0JBRFosU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQU9yQyxjQUFjO3NCQURqQixTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFPMUMsZUFBZTtzQkFEbEIsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBTy9DLFFBQVE7c0JBRFAsZUFBZTt1QkFBQyxvQkFBb0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFO2dCQXVCdEUsZ0JBQWdCO3NCQUFyQyxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXRQYXJhbXMgfSBmcm9tICcuL3V0aWxzL2dldC1wYXJhbXMnO1xuaW1wb3J0IHsgU3dpcGVyU2xpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXBlci1zbGlkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgc2V0UHJvcGVydHksXG4gIGlnbm9yZU5nT25DaGFuZ2VzLFxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gIGlzU2hvd0VsLFxufSBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7XG4gIFN3aXBlck9wdGlvbnMsXG4gIFN3aXBlckV2ZW50cyxcbiAgTmF2aWdhdGlvbk9wdGlvbnMsXG4gIFBhZ2luYXRpb25PcHRpb25zLFxuICBTY3JvbGxiYXJPcHRpb25zLFxuICBWaXJ0dWFsT3B0aW9ucyxcbn0gZnJvbSAnc3dpcGVyL3R5cGVzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3aXBlciwgW3N3aXBlcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIHN3aXBlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVuYWJsZWQ6IFN3aXBlck9wdGlvbnNbJ2VuYWJsZWQnXTtcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBTd2lwZXJPcHRpb25zWydkaXJlY3Rpb24nXTtcbiAgQElucHV0KCkgdG91Y2hFdmVudHNUYXJnZXQ6IFN3aXBlck9wdGlvbnNbJ3RvdWNoRXZlbnRzVGFyZ2V0J107XG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZTogU3dpcGVyT3B0aW9uc1snaW5pdGlhbFNsaWRlJ107XG4gIEBJbnB1dCgpIHNwZWVkOiBTd2lwZXJPcHRpb25zWydzcGVlZCddO1xuICBASW5wdXQoKSBjc3NNb2RlOiBTd2lwZXJPcHRpb25zWydjc3NNb2RlJ107XG4gIEBJbnB1dCgpIHVwZGF0ZU9uV2luZG93UmVzaXplOiBTd2lwZXJPcHRpb25zWyd1cGRhdGVPbldpbmRvd1Jlc2l6ZSddO1xuICBASW5wdXQoKSByZXNpemVPYnNlcnZlcjogU3dpcGVyT3B0aW9uc1sncmVzaXplT2JzZXJ2ZXInXTtcbiAgQElucHV0KCkgbmVzdGVkOiBTd2lwZXJPcHRpb25zWyduZXN0ZWQnXTtcbiAgQElucHV0KCkgZm9jdXNhYmxlRWxlbWVudHM6IFN3aXBlck9wdGlvbnNbJ2ZvY3VzYWJsZUVsZW1lbnRzJ107XG4gIEBJbnB1dCgpIHdpZHRoOiBTd2lwZXJPcHRpb25zWyd3aWR0aCddO1xuICBASW5wdXQoKSBoZWlnaHQ6IFN3aXBlck9wdGlvbnNbJ2hlaWdodCddO1xuICBASW5wdXQoKSBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiddO1xuICBASW5wdXQoKSB1c2VyQWdlbnQ6IFN3aXBlck9wdGlvbnNbJ3VzZXJBZ2VudCddO1xuICBASW5wdXQoKSB1cmw6IFN3aXBlck9wdGlvbnNbJ3VybCddO1xuICBASW5wdXQoKSBlZGdlU3dpcGVEZXRlY3Rpb246IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGVkZ2VTd2lwZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKSBmcmVlTW9kZTogU3dpcGVyT3B0aW9uc1snZnJlZU1vZGUnXTtcbiAgQElucHV0KCkgYXV0b0hlaWdodDogU3dpcGVyT3B0aW9uc1snYXV0b0hlaWdodCddO1xuICBASW5wdXQoKSBzZXRXcmFwcGVyU2l6ZTogU3dpcGVyT3B0aW9uc1snc2V0V3JhcHBlclNpemUnXTtcbiAgQElucHV0KCkgdmlydHVhbFRyYW5zbGF0ZTogU3dpcGVyT3B0aW9uc1sndmlydHVhbFRyYW5zbGF0ZSddO1xuICBASW5wdXQoKSBlZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2VmZmVjdCddO1xuICBASW5wdXQoKSBicmVha3BvaW50czogU3dpcGVyT3B0aW9uc1snYnJlYWtwb2ludHMnXTtcbiAgQElucHV0KCkgc3BhY2VCZXR3ZWVuOiBTd2lwZXJPcHRpb25zWydzcGFjZUJldHdlZW4nXTtcbiAgQElucHV0KCkgc2xpZGVzUGVyVmlldzogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyVmlldyddO1xuICBASW5wdXQoKSBncmlkOiBTd2lwZXJPcHRpb25zWydncmlkJ107XG4gIEBJbnB1dCgpIHNsaWRlc1Blckdyb3VwOiBTd2lwZXJPcHRpb25zWydzbGlkZXNQZXJHcm91cCddO1xuICBASW5wdXQoKSBzbGlkZXNQZXJHcm91cFNraXA6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc1Blckdyb3VwU2tpcCddO1xuICBASW5wdXQoKSBjZW50ZXJlZFNsaWRlczogU3dpcGVyT3B0aW9uc1snY2VudGVyZWRTbGlkZXMnXTtcbiAgQElucHV0KCkgY2VudGVyZWRTbGlkZXNCb3VuZHM6IFN3aXBlck9wdGlvbnNbJ2NlbnRlcmVkU2xpZGVzQm91bmRzJ107XG4gIEBJbnB1dCgpIHNsaWRlc09mZnNldEJlZm9yZTogU3dpcGVyT3B0aW9uc1snc2xpZGVzT2Zmc2V0QmVmb3JlJ107XG4gIEBJbnB1dCgpIHNsaWRlc09mZnNldEFmdGVyOiBTd2lwZXJPcHRpb25zWydzbGlkZXNPZmZzZXRBZnRlciddO1xuICBASW5wdXQoKSBub3JtYWxpemVTbGlkZUluZGV4OiBTd2lwZXJPcHRpb25zWydub3JtYWxpemVTbGlkZUluZGV4J107XG4gIEBJbnB1dCgpIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogU3dpcGVyT3B0aW9uc1snY2VudGVySW5zdWZmaWNpZW50U2xpZGVzJ107XG4gIEBJbnB1dCgpIHdhdGNoT3ZlcmZsb3c6IFN3aXBlck9wdGlvbnNbJ3dhdGNoT3ZlcmZsb3cnXTtcbiAgQElucHV0KCkgcm91bmRMZW5ndGhzOiBTd2lwZXJPcHRpb25zWydyb3VuZExlbmd0aHMnXTtcbiAgQElucHV0KCkgdG91Y2hSYXRpbzogU3dpcGVyT3B0aW9uc1sndG91Y2hSYXRpbyddO1xuICBASW5wdXQoKSB0b3VjaEFuZ2xlOiBTd2lwZXJPcHRpb25zWyd0b3VjaEFuZ2xlJ107XG4gIEBJbnB1dCgpIHNpbXVsYXRlVG91Y2g6IFN3aXBlck9wdGlvbnNbJ3NpbXVsYXRlVG91Y2gnXTtcbiAgQElucHV0KCkgc2hvcnRTd2lwZXM6IFN3aXBlck9wdGlvbnNbJ3Nob3J0U3dpcGVzJ107XG4gIEBJbnB1dCgpIGxvbmdTd2lwZXM6IFN3aXBlck9wdGlvbnNbJ2xvbmdTd2lwZXMnXTtcbiAgQElucHV0KCkgbG9uZ1N3aXBlc1JhdGlvOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzUmF0aW8nXTtcbiAgQElucHV0KCkgbG9uZ1N3aXBlc01zOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzTXMnXTtcbiAgQElucHV0KCkgZm9sbG93RmluZ2VyOiBTd2lwZXJPcHRpb25zWydmb2xsb3dGaW5nZXInXTtcbiAgQElucHV0KCkgYWxsb3dUb3VjaE1vdmU6IFN3aXBlck9wdGlvbnNbJ2FsbG93VG91Y2hNb3ZlJ107XG4gIEBJbnB1dCgpIHRocmVzaG9sZDogU3dpcGVyT3B0aW9uc1sndGhyZXNob2xkJ107XG4gIEBJbnB1dCgpIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogU3dpcGVyT3B0aW9uc1sndG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uJ107XG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogU3dpcGVyT3B0aW9uc1sndG91Y2hTdGFydFByZXZlbnREZWZhdWx0J107XG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBTd2lwZXJPcHRpb25zWyd0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCddO1xuICBASW5wdXQoKSB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBTd2lwZXJPcHRpb25zWyd0b3VjaFJlbGVhc2VPbkVkZ2VzJ107XG4gIEBJbnB1dCgpIHVuaXF1ZU5hdkVsZW1lbnRzOiBTd2lwZXJPcHRpb25zWyd1bmlxdWVOYXZFbGVtZW50cyddO1xuICBASW5wdXQoKSByZXNpc3RhbmNlOiBTd2lwZXJPcHRpb25zWydyZXNpc3RhbmNlJ107XG4gIEBJbnB1dCgpIHJlc2lzdGFuY2VSYXRpbzogU3dpcGVyT3B0aW9uc1sncmVzaXN0YW5jZVJhdGlvJ107XG4gIEBJbnB1dCgpIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IFN3aXBlck9wdGlvbnNbJ3dhdGNoU2xpZGVzUHJvZ3Jlc3MnXTtcbiAgQElucHV0KCkgZ3JhYkN1cnNvcjogU3dpcGVyT3B0aW9uc1snZ3JhYkN1cnNvciddO1xuICBASW5wdXQoKSBwcmV2ZW50Q2xpY2tzOiBTd2lwZXJPcHRpb25zWydwcmV2ZW50Q2xpY2tzJ107XG4gIEBJbnB1dCgpIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogU3dpcGVyT3B0aW9uc1sncHJldmVudENsaWNrc1Byb3BhZ2F0aW9uJ107XG4gIEBJbnB1dCgpIHNsaWRlVG9DbGlja2VkU2xpZGU6IFN3aXBlck9wdGlvbnNbJ3NsaWRlVG9DbGlja2VkU2xpZGUnXTtcbiAgQElucHV0KCkgcHJlbG9hZEltYWdlczogU3dpcGVyT3B0aW9uc1sncHJlbG9hZEltYWdlcyddO1xuICBASW5wdXQoKSB1cGRhdGVPbkltYWdlc1JlYWR5OiBTd2lwZXJPcHRpb25zWyd1cGRhdGVPbkltYWdlc1JlYWR5J107XG4gIEBJbnB1dCgpIGxvb3A6IFN3aXBlck9wdGlvbnNbJ2xvb3AnXTtcbiAgQElucHV0KCkgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2xvb3BBZGRpdGlvbmFsU2xpZGVzJ107XG4gIEBJbnB1dCgpIGxvb3BlZFNsaWRlczogU3dpcGVyT3B0aW9uc1snbG9vcGVkU2xpZGVzJ107XG4gIEBJbnB1dCgpIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IFN3aXBlck9wdGlvbnNbJ2xvb3BGaWxsR3JvdXBXaXRoQmxhbmsnXTtcbiAgQElucHV0KCkgbG9vcFByZXZlbnRzU2xpZGU6IFN3aXBlck9wdGlvbnNbJ2xvb3BQcmV2ZW50c1NsaWRlJ107XG4gIEBJbnB1dCgpIGFsbG93U2xpZGVQcmV2OiBTd2lwZXJPcHRpb25zWydhbGxvd1NsaWRlUHJldiddO1xuICBASW5wdXQoKSBhbGxvd1NsaWRlTmV4dDogU3dpcGVyT3B0aW9uc1snYWxsb3dTbGlkZU5leHQnXTtcbiAgQElucHV0KCkgc3dpcGVIYW5kbGVyOiBTd2lwZXJPcHRpb25zWydzd2lwZUhhbmRsZXInXTtcbiAgQElucHV0KCkgbm9Td2lwaW5nOiBTd2lwZXJPcHRpb25zWydub1N3aXBpbmcnXTtcbiAgQElucHV0KCkgbm9Td2lwaW5nQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZ0NsYXNzJ107XG4gIEBJbnB1dCgpIG5vU3dpcGluZ1NlbGVjdG9yOiBTd2lwZXJPcHRpb25zWydub1N3aXBpbmdTZWxlY3RvciddO1xuICBASW5wdXQoKSBwYXNzaXZlTGlzdGVuZXJzOiBTd2lwZXJPcHRpb25zWydwYXNzaXZlTGlzdGVuZXJzJ107XG4gIEBJbnB1dCgpIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ2NvbnRhaW5lck1vZGlmaWVyQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVDbGFzcyddID0gJ3N3aXBlci1zbGlkZSc7XG4gIEBJbnB1dCgpIHNsaWRlQmxhbmtDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVCbGFua0NsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlQWN0aXZlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQWN0aXZlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZVZpc2libGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVWaXNpYmxlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZU5leHRDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVOZXh0Q2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlRHVwbGljYXRlTmV4dENsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlUHJldkNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZVByZXZDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MnXTtcbiAgQElucHV0KCkgd3JhcHBlckNsYXNzOiBTd2lwZXJPcHRpb25zWyd3cmFwcGVyQ2xhc3MnXSA9ICdzd2lwZXItd3JhcHBlcic7XG4gIEBJbnB1dCgpIHJ1bkNhbGxiYWNrc09uSW5pdDogU3dpcGVyT3B0aW9uc1sncnVuQ2FsbGJhY2tzT25Jbml0J107XG4gIEBJbnB1dCgpIG9ic2VydmVQYXJlbnRzOiBTd2lwZXJPcHRpb25zWydvYnNlcnZlUGFyZW50cyddO1xuICBASW5wdXQoKSBvYnNlcnZlU2xpZGVDaGlsZHJlbjogU3dpcGVyT3B0aW9uc1snb2JzZXJ2ZVNsaWRlQ2hpbGRyZW4nXTtcbiAgQElucHV0KCkgYTExeTogU3dpcGVyT3B0aW9uc1snYTExeSddO1xuICBASW5wdXQoKSBhdXRvcGxheTogU3dpcGVyT3B0aW9uc1snYXV0b3BsYXknXTtcbiAgQElucHV0KCkgY29udHJvbGxlcjogU3dpcGVyT3B0aW9uc1snY29udHJvbGxlciddO1xuICBASW5wdXQoKSBjb3ZlcmZsb3dFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NvdmVyZmxvd0VmZmVjdCddO1xuICBASW5wdXQoKSBjdWJlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjdWJlRWZmZWN0J107XG4gIEBJbnB1dCgpIGZhZGVFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2ZhZGVFZmZlY3QnXTtcbiAgQElucHV0KCkgZmxpcEVmZmVjdDogU3dpcGVyT3B0aW9uc1snZmxpcEVmZmVjdCddO1xuICBASW5wdXQoKSBjcmVhdGl2ZUVmZmVjdDogU3dpcGVyT3B0aW9uc1snY3JlYXRpdmVFZmZlY3QnXTtcbiAgQElucHV0KCkgY2FyZHNFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NhcmRzRWZmZWN0J107XG4gIEBJbnB1dCgpIGhhc2hOYXZpZ2F0aW9uOiBTd2lwZXJPcHRpb25zWydoYXNoTmF2aWdhdGlvbiddO1xuICBASW5wdXQoKSBoaXN0b3J5OiBTd2lwZXJPcHRpb25zWydoaXN0b3J5J107XG4gIEBJbnB1dCgpIGtleWJvYXJkOiBTd2lwZXJPcHRpb25zWydrZXlib2FyZCddO1xuICBASW5wdXQoKSBsYXp5OiBTd2lwZXJPcHRpb25zWydsYXp5J107XG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IFN3aXBlck9wdGlvbnNbJ21vdXNld2hlZWwnXTtcbiAgQElucHV0KCkgcGFyYWxsYXg6IFN3aXBlck9wdGlvbnNbJ3BhcmFsbGF4J107XG4gIEBJbnB1dCgpIHRodW1iczogU3dpcGVyT3B0aW9uc1sndGh1bWJzJ107XG4gIEBJbnB1dCgpIHpvb206IFN3aXBlck9wdGlvbnNbJ3pvb20nXTtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IG5hdmlnYXRpb24odmFsKSB7XG4gICAgY29uc3QgY3VycmVudE5leHQgPVxuICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnJ1xuICAgICAgICA/IHRoaXMuX25hdmlnYXRpb24/Lm5leHRFbFxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgY3VycmVudFByZXYgPVxuICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnJ1xuICAgICAgICA/IHRoaXMuX25hdmlnYXRpb24/LnByZXZFbFxuICAgICAgICA6IG51bGw7XG4gICAgdGhpcy5fbmF2aWdhdGlvbiA9IHNldFByb3BlcnR5KHZhbCwge1xuICAgICAgbmV4dEVsOiBjdXJyZW50TmV4dCB8fCBudWxsLFxuICAgICAgcHJldkVsOiBjdXJyZW50UHJldiB8fCBudWxsLFxuICAgIH0pO1xuICAgIHRoaXMuc2hvd05hdmlnYXRpb24gPSAhKFxuICAgICAgY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCkgIT09IHRydWUgfHxcbiAgICAgICh0aGlzLl9uYXZpZ2F0aW9uICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiZcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgIT09IHRoaXMuX3ByZXZFbFJlZj8ubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAodGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgIT09IG51bGwgfHwgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgIT09IG51bGwpICYmXG4gICAgICAgICh0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24ucHJldkVsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uLm5leHRFbCA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgPT09ICdvYmplY3QnKSlcbiAgICApO1xuICB9XG4gIGdldCBuYXZpZ2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uO1xuICB9XG4gIHByaXZhdGUgX25hdmlnYXRpb246IE5hdmlnYXRpb25PcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuICBzaG93TmF2aWdhdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IHBhZ2luYXRpb24odmFsKSB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICB0eXBlb2YgdGhpcy5fcGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX3BhZ2luYXRpb24gIT09ICcnXG4gICAgICAgID8gdGhpcy5fcGFnaW5hdGlvbj8uZWxcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSBzZXRQcm9wZXJ0eSh2YWwsIHtcbiAgICAgIGVsOiBjdXJyZW50IHx8IG51bGwsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGlzU2hvd0VsKHZhbCwgdGhpcy5fcGFnaW5hdGlvbiwgdGhpcy5fcGFnaW5hdGlvbkVsUmVmKTtcbiAgfVxuICBnZXQgcGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnaW5hdGlvbjtcbiAgfVxuICBwcml2YXRlIF9wYWdpbmF0aW9uOiBQYWdpbmF0aW9uT3B0aW9ucyB8IGJvb2xlYW4gfCAnJztcbiAgc2hvd1BhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxiYXIodmFsKSB7XG4gICAgY29uc3QgY3VycmVudCA9XG4gICAgICB0eXBlb2YgdGhpcy5fc2Nyb2xsYmFyICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fc2Nyb2xsYmFyICE9PSAnJyA/IHRoaXMuX3Njcm9sbGJhcj8uZWwgOiBudWxsO1xuICAgIHRoaXMuX3Njcm9sbGJhciA9IHNldFByb3BlcnR5KHZhbCwge1xuICAgICAgZWw6IGN1cnJlbnQgfHwgbnVsbCxcbiAgICB9KTtcbiAgICB0aGlzLnNob3dTY3JvbGxiYXIgPSBpc1Nob3dFbCh2YWwsIHRoaXMuX3Njcm9sbGJhciwgdGhpcy5fc2Nyb2xsYmFyRWxSZWYpO1xuICB9XG4gIGdldCBzY3JvbGxiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcjtcbiAgfVxuICBwcml2YXRlIF9zY3JvbGxiYXI6IFNjcm9sbGJhck9wdGlvbnMgfCBib29sZWFuIHwgJyc7XG4gIHNob3dTY3JvbGxiYXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2aXJ0dWFsKHZhbCkge1xuICAgIHRoaXMuX3ZpcnR1YWwgPSBzZXRQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIGdldCB2aXJ0dWFsKCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xuICB9XG4gIHByaXZhdGUgX3ZpcnR1YWw6IFZpcnR1YWxPcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc29sZS53YXJuKCdgWyhpbmRleCldYCBwcm9wIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB1cGNvbWluZyB2ZXJzaW9ucycpO1xuICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcodmFsOiBTd2lwZXJPcHRpb25zKSB7XG4gICAgdGhpcy51cGRhdGVTd2lwZXIodmFsKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gZ2V0UGFyYW1zKHZhbCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICB9XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdfYmVmb3JlQnJlYWtwb2ludCcpIHNfX2JlZm9yZUJyZWFrcG9pbnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19iZWZvcmVCcmVha3BvaW50J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdfY29udGFpbmVyQ2xhc3NlcycpIHNfX2NvbnRhaW5lckNsYXNzZXM6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19jb250YWluZXJDbGFzc2VzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdfc2xpZGVDbGFzcycpIHNfX3NsaWRlQ2xhc3M6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19zbGlkZUNsYXNzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdfc3dpcGVyJykgc19fc3dpcGVyOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydfc3dpcGVyJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdhY3RpdmVJbmRleENoYW5nZScpIHNfYWN0aXZlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2FjdGl2ZUluZGV4Q2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdhZnRlckluaXQnKSBzX2FmdGVySW5pdDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYWZ0ZXJJbml0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdhdXRvcGxheScpIHNfYXV0b3BsYXk6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2F1dG9wbGF5J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdhdXRvcGxheVN0YXJ0Jykgc19hdXRvcGxheVN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhdXRvcGxheVN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdhdXRvcGxheVN0b3AnKSBzX2F1dG9wbGF5U3RvcDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYXV0b3BsYXlTdG9wJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVEZXN0cm95Jykgc19iZWZvcmVEZXN0cm95OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVEZXN0cm95J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVJbml0Jykgc19iZWZvcmVJbml0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVJbml0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVMb29wRml4Jykgc19iZWZvcmVMb29wRml4OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVMb29wRml4J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVSZXNpemUnKSBzX2JlZm9yZVJlc2l6ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlUmVzaXplJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jykgc19iZWZvcmVTbGlkZUNoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnKSBzX2JlZm9yZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlVHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdicmVha3BvaW50Jykgc19icmVha3BvaW50OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydicmVha3BvaW50J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdjaGFuZ2VEaXJlY3Rpb24nKSBzX2NoYW5nZURpcmVjdGlvbjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snY2hhbmdlRGlyZWN0aW9uJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdjbGljaycpIHNfY2xpY2s6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2NsaWNrJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdkb3VibGVUYXAnKSBzX2RvdWJsZVRhcDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZG91YmxlVGFwJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdkb3VibGVDbGljaycpIHNfZG91YmxlQ2xpY2s6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2RvdWJsZUNsaWNrJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdkZXN0cm95Jykgc19kZXN0cm95OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydkZXN0cm95J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdmcm9tRWRnZScpIHNfZnJvbUVkZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2Zyb21FZGdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdoYXNoQ2hhbmdlJykgc19oYXNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydoYXNoQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdoYXNoU2V0Jykgc19oYXNoU2V0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydoYXNoU2V0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdpbWFnZXNSZWFkeScpIHNfaW1hZ2VzUmVhZHk6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2ltYWdlc1JlYWR5J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdpbml0Jykgc19pbml0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydpbml0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdrZXlQcmVzcycpIHNfa2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2tleVByZXNzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdsYXp5SW1hZ2VMb2FkJykgc19sYXp5SW1hZ2VMb2FkOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydsYXp5SW1hZ2VMb2FkJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdsYXp5SW1hZ2VSZWFkeScpIHNfbGF6eUltYWdlUmVhZHk6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xhenlJbWFnZVJlYWR5J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdsb29wRml4Jykgc19sb29wRml4OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydsb29wRml4J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdtb21lbnR1bUJvdW5jZScpIHNfbW9tZW50dW1Cb3VuY2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ21vbWVudHVtQm91bmNlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCduYXZpZ2F0aW9uSGlkZScpIHNfbmF2aWdhdGlvbkhpZGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ25hdmlnYXRpb25IaWRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCduYXZpZ2F0aW9uU2hvdycpIHNfbmF2aWdhdGlvblNob3c6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ25hdmlnYXRpb25TaG93J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdvYnNlcnZlclVwZGF0ZScpIHNfb2JzZXJ2ZXJVcGRhdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ29ic2VydmVyVXBkYXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdvcmllbnRhdGlvbmNoYW5nZScpIHNfb3JpZW50YXRpb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ29yaWVudGF0aW9uY2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdwYWdpbmF0aW9uSGlkZScpIHNfcGFnaW5hdGlvbkhpZGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25IaWRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdwYWdpbmF0aW9uUmVuZGVyJykgc19wYWdpbmF0aW9uUmVuZGVyOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwYWdpbmF0aW9uUmVuZGVyJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdwYWdpbmF0aW9uU2hvdycpIHNfcGFnaW5hdGlvblNob3c6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25TaG93J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdwYWdpbmF0aW9uVXBkYXRlJykgc19wYWdpbmF0aW9uVXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwYWdpbmF0aW9uVXBkYXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdwcm9ncmVzcycpIHNfcHJvZ3Jlc3M6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Byb2dyZXNzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdyZWFjaEJlZ2lubmluZycpIHNfcmVhY2hCZWdpbm5pbmc6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3JlYWNoQmVnaW5uaW5nJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdyZWFjaEVuZCcpIHNfcmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3JlYWNoRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdyZWFsSW5kZXhDaGFuZ2UnKSBzX3JlYWxJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhbEluZGV4Q2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdyZXNpemUnKSBzX3Jlc2l6ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVzaXplJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzY3JvbGwnKSBzX3Njcm9sbDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzY3JvbGxiYXJEcmFnRW5kJykgc19zY3JvbGxiYXJEcmFnRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGxiYXJEcmFnRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzY3JvbGxiYXJEcmFnTW92ZScpIHNfc2Nyb2xsYmFyRHJhZ01vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Njcm9sbGJhckRyYWdNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzY3JvbGxiYXJEcmFnU3RhcnQnKSBzX3Njcm9sbGJhckRyYWdTdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ1N0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzZXRUcmFuc2l0aW9uJykgc19zZXRUcmFuc2l0aW9uOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzZXRUcmFuc2l0aW9uJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzZXRUcmFuc2xhdGUnKSBzX3NldFRyYW5zbGF0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2V0VHJhbnNsYXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZUNoYW5nZScpIHNfc2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnKSBzX3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJykgc19zbGlkZU5leHRUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZU5leHRUcmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJykgc19zbGlkZVByZXZUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZVByZXZUcmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlUHJldlRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpIHNfc2xpZGVSZXNldFRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZXJNb3ZlJykgc19zbGlkZXJNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXJNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZXJGaXJzdE1vdmUnKSBzX3NsaWRlckZpcnN0TW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVyRmlyc3RNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZXNMZW5ndGhDaGFuZ2UnKSBzX3NsaWRlc0xlbmd0aENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVzTGVuZ3RoQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJykgc19zbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbmFwR3JpZExlbmd0aENoYW5nZScpIHNfc25hcEdyaWRMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzbmFwSW5kZXhDaGFuZ2UnKSBzX3NuYXBJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc25hcEluZGV4Q2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0YXAnKSBzX3RhcDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndGFwJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0b0VkZ2UnKSBzX3RvRWRnZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG9FZGdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0b3VjaEVuZCcpIHNfdG91Y2hFbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0b3VjaE1vdmUnKSBzX3RvdWNoTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0b3VjaE1vdmVPcHBvc2l0ZScpIHNfdG91Y2hNb3ZlT3Bwb3NpdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoTW92ZU9wcG9zaXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0b3VjaFN0YXJ0Jykgc190b3VjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaFN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0cmFuc2l0aW9uRW5kJykgc190cmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0cmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd0cmFuc2l0aW9uU3RhcnQnKSBzX3RyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd1cGRhdGUnKSBzX3VwZGF0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndXBkYXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd6b29tQ2hhbmdlJykgc196b29tQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd6b29tQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdsb2NrJykgc19sb2NrOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydsb2NrJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCd1bmxvY2snKSBzX3VubG9jazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndW5sb2NrJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBAT3V0cHV0KCdzd2lwZXInKSBzX3N3aXBlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdwcmV2RWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IHByZXZFbFJlZihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3ByZXZFbFJlZiA9IGVsO1xuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMubmF2aWdhdGlvbiwgJ25hdmlnYXRpb24nLCAncHJldkVsJyk7XG4gIH1cbiAgX3ByZXZFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmV4dEVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBuZXh0RWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9uZXh0RWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLm5hdmlnYXRpb24sICduYXZpZ2F0aW9uJywgJ25leHRFbCcpO1xuICB9XG4gIF9uZXh0RWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGJhckVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBzY3JvbGxiYXJFbFJlZihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3Njcm9sbGJhckVsUmVmID0gZWw7XG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5zY3JvbGxiYXIsICdzY3JvbGxiYXInKTtcbiAgfVxuICBfc2Nyb2xsYmFyRWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3BhZ2luYXRpb25FbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgcGFnaW5hdGlvbkVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcGFnaW5hdGlvbkVsUmVmID0gZWw7XG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5wYWdpbmF0aW9uLCAncGFnaW5hdGlvbicpO1xuICB9XG4gIF9wYWdpbmF0aW9uRWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oU3dpcGVyU2xpZGVEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IGZhbHNlLCBlbWl0RGlzdGluY3RDaGFuZ2VzT25seTogdHJ1ZSB9KVxuICBzbGlkZXNFbDogUXVlcnlMaXN0PFN3aXBlclNsaWRlRGlyZWN0aXZlPjtcbiAgcHJpdmF0ZSBzbGlkZXM6IFN3aXBlclNsaWRlRGlyZWN0aXZlW107XG5cbiAgcHJlcGVuZFNsaWRlczogT2JzZXJ2YWJsZTxTd2lwZXJTbGlkZURpcmVjdGl2ZVtdPjtcbiAgYXBwZW5kU2xpZGVzOiBPYnNlcnZhYmxlPFN3aXBlclNsaWRlRGlyZWN0aXZlW10+O1xuXG4gIHN3aXBlclJlZjogU3dpcGVyO1xuICByZWFkb25seSBfYWN0aXZlU2xpZGVzID0gbmV3IFN1YmplY3Q8U3dpcGVyU2xpZGVEaXJlY3RpdmVbXT4oKTtcblxuICBnZXQgYWN0aXZlU2xpZGVzKCkge1xuICAgIGlmICh0aGlzLnZpcnR1YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVTbGlkZXM7XG4gICAgfVxuICAgIHJldHVybiBvZih0aGlzLnNsaWRlcyk7XG4gIH1cblxuICBnZXQgem9vbUNvbnRhaW5lckNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gJiYgdHlwZW9mIHRoaXMuem9vbSAhPT0gJ2Jvb2xlYW4nXG4gICAgICA/IHRoaXMuem9vbS5jb250YWluZXJDbGFzc1xuICAgICAgOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBjb250YWluZXJDbGFzc2VzOiBzdHJpbmcgPSAnc3dpcGVyJztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBPYmplY3QsXG4gICkge31cblxuICBwcml2YXRlIF9zZXRFbGVtZW50KGVsOiBFbGVtZW50UmVmLCByZWY6IGFueSwgdXBkYXRlOiBzdHJpbmcsIGtleSA9ICdlbCcpIHtcbiAgICBpZiAoIWVsIHx8ICFyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlZiAmJiBlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBpZiAocmVmW2tleV0gPT09IGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVmW2tleV0gPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGVPYmo6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gICAgdXBkYXRlT2JqW3VwZGF0ZV0gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlSW5pdFN3aXBlcih1cGRhdGVPYmopO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBnZXRQYXJhbXModGhpcyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNoaWxkcmVuU2xpZGVzSW5pdCgpO1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc19zd2lwZXIuZW1pdCh0aGlzLnN3aXBlclJlZik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNoaWxkcmVuU2xpZGVzSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlc0NoYW5nZXModGhpcy5zbGlkZXNFbCk7XG4gICAgdGhpcy5zbGlkZXNFbC5jaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnNsaWRlc0NoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGlkZXNDaGFuZ2VzID0gKHZhbDogUXVlcnlMaXN0PFN3aXBlclNsaWRlRGlyZWN0aXZlPikgPT4ge1xuICAgIHRoaXMuc2xpZGVzID0gdmFsLm1hcCgoc2xpZGU6IFN3aXBlclNsaWRlRGlyZWN0aXZlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzbGlkZS5zbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICBzbGlkZS5jbGFzc05hbWVzID0gdGhpcy5zbGlkZUNsYXNzIHx8ICcnO1xuICAgICAgcmV0dXJuIHNsaWRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICB0aGlzLmNhbGNMb29wZWRTbGlkZXMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnZpcnR1YWwpIHtcbiAgICAgIGlmICh0aGlzLmxvb3BlZFNsaWRlcykge1xuICAgICAgICB0aGlzLnByZXBlbmRTbGlkZXMgPSBvZih0aGlzLnNsaWRlcy5zbGljZSh0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcykpO1xuICAgICAgICB0aGlzLmFwcGVuZFNsaWRlcyA9IG9mKHRoaXMuc2xpZGVzLnNsaWNlKDAsIHRoaXMubG9vcGVkU2xpZGVzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN3aXBlclJlZiAmJiB0aGlzLnN3aXBlclJlZi52aXJ0dWFsKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH07XG5cbiAgZ2V0IGlzU3dpcGVyQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkO1xuICB9XG5cbiAgaW5pdFN3aXBlcigpIHtcbiAgICBjb25zdCB7IHBhcmFtczogc3dpcGVyUGFyYW1zLCBwYXNzZWRQYXJhbXMgfSA9IGdldFBhcmFtcyh0aGlzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN3aXBlclBhcmFtcyk7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHN3aXBlclBhcmFtcy5pbml0ID0gZmFsc2U7XG4gICAgICBpZiAoIXN3aXBlclBhcmFtcy52aXJ0dWFsKSB7XG4gICAgICAgIHN3aXBlclBhcmFtcy5vYnNlcnZlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlclBhcmFtcy5vbkFueSA9IChldmVudE5hbWU6IGtleW9mIFN3aXBlckNvbXBvbmVudCwgLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IHRoaXNbKCdzXycgKyBldmVudE5hbWUpIGFzIGtleW9mIFN3aXBlckNvbXBvbmVudF0gYXMgRXZlbnRFbWl0dGVyPGFueT47XG4gICAgICAgIGlmIChlbWl0dGVyKSB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgX3NsaWRlQ2xhc3NlczogU3dpcGVyRXZlbnRzWydfc2xpZGVDbGFzc2VzJ10gPSAoXywgdXBkYXRlZCkgPT4ge1xuICAgICAgICB1cGRhdGVkLmZvckVhY2goKHsgc2xpZGVFbCwgY2xhc3NOYW1lcyB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBkYXRhSW5kZXggPyBwYXJzZUludChkYXRhSW5kZXgpIDogaW5kZXg7XG4gICAgICAgICAgaWYgKHRoaXMudmlydHVhbCkge1xuICAgICAgICAgICAgY29uc3QgdmlydHVhbFNsaWRlID0gdGhpcy5zbGlkZXMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52aXJ0dWFsSW5kZXggJiYgaXRlbS52aXJ0dWFsSW5kZXggPT09IHNsaWRlSW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsU2xpZGUpIHtcbiAgICAgICAgICAgICAgdmlydHVhbFNsaWRlLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuc2xpZGVzW3NsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tzbGlkZUluZGV4XS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgX2NvbnRhaW5lckNsYXNzZXM6IFN3aXBlckV2ZW50c1snX2NvbnRhaW5lckNsYXNzZXMnXSA9IChfLCBjbGFzc2VzKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyUGFyYW1zLm9uLCB7XG4gICAgICAgIF9jb250YWluZXJDbGFzc2VzLFxuICAgICAgICBfc2xpZGVDbGFzc2VzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBzd2lwZXJSZWYgPSBuZXcgU3dpcGVyKHN3aXBlclBhcmFtcyk7XG4gICAgICBzd2lwZXJSZWYubG9vcENyZWF0ZSA9ICgpID0+IHt9O1xuICAgICAgc3dpcGVyUmVmLmxvb3BEZXN0cm95ID0gKCkgPT4ge307XG4gICAgICBpZiAoc3dpcGVyUGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyUmVmLmxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNWaXJ0dWFsRW5hYmxlZCA9XG4gICAgICAgIHR5cGVvZiBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICdib29sZWFuJyAmJlxuICAgICAgICBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICAgIGlmIChzd2lwZXJSZWYudmlydHVhbCAmJiBpc1ZpcnR1YWxFbmFibGVkKSB7XG4gICAgICAgIHN3aXBlclJlZi52aXJ0dWFsLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgICAgICBjb25zdCBleHRlbmRXaXRoID0ge1xuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICBzbGlkZXM6IHRoaXMuc2xpZGVzLFxuICAgICAgICAgIHJlbmRlckV4dGVybmFsOiB0aGlzLnVwZGF0ZVZpcnR1YWxTbGlkZXMsXG4gICAgICAgICAgcmVuZGVyRXh0ZXJuYWxVcGRhdGU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBleHRlbmQoc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgICAgZXh0ZW5kKHN3aXBlclJlZi5vcmlnaW5hbFBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmID0gc3dpcGVyUmVmLmluaXQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0VuYWJsZWQgPVxuICAgICAgICAgIHR5cGVvZiB0aGlzLnN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5zd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgICAgIGlmICh0aGlzLnN3aXBlclJlZi52aXJ0dWFsICYmIGlzRW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgc3dpcGVyUmVmLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zd2lwZXJSZWYucmVhbEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdHlsZTogYW55ID0gbnVsbDtcbiAgY3VycmVudFZpcnR1YWxEYXRhOiBhbnk7IC8vIFRPRE86IHR5cGUgdmlydHVhbERhdGE7XG4gIHByaXZhdGUgdXBkYXRlVmlydHVhbFNsaWRlcyA9ICh2aXJ0dWFsRGF0YTogYW55KSA9PiB7XG4gICAgLy8gVE9ETzogdHlwZSB2aXJ0dWFsRGF0YVxuICAgIGlmIChcbiAgICAgICF0aGlzLnN3aXBlclJlZiB8fFxuICAgICAgKHRoaXMuY3VycmVudFZpcnR1YWxEYXRhICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLmZyb20gPT09IHZpcnR1YWxEYXRhLmZyb20gJiZcbiAgICAgICAgdGhpcy5jdXJyZW50VmlydHVhbERhdGEudG8gPT09IHZpcnR1YWxEYXRhLnRvICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLm9mZnNldCA9PT0gdmlydHVhbERhdGEub2Zmc2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlID0gdGhpcy5zd2lwZXJSZWYuaXNIb3Jpem9udGFsKClcbiAgICAgID8ge1xuICAgICAgICAgIFt0aGlzLnN3aXBlclJlZi5ydGxUcmFuc2xhdGUgPyAncmlnaHQnIDogJ2xlZnQnXTogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YCxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiBgJHt2aXJ0dWFsRGF0YS5vZmZzZXR9cHhgLFxuICAgICAgICB9O1xuICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhID0gdmlydHVhbERhdGE7XG4gICAgdGhpcy5fYWN0aXZlU2xpZGVzLm5leHQodmlydHVhbERhdGEuc2xpZGVzKTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzKCk7XG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgaWYgKHRoaXMuc3dpcGVyUmVmLmxhenkgJiYgdGhpcy5zd2lwZXJSZWYucGFyYW1zLmxhenlbJ2VuYWJsZWQnXSkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VkUGFyYW1zOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy51cGRhdGVTd2lwZXIoY2hhbmdlZFBhcmFtcyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdXBkYXRlSW5pdFN3aXBlcihjaGFuZ2VkUGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIShjaGFuZ2VkUGFyYW1zICYmIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGFyYW1zOiBjdXJyZW50UGFyYW1zLFxuICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICBzY3JvbGxiYXIsXG4gICAgICAgIHZpcnR1YWwsXG4gICAgICAgIHRodW1icyxcbiAgICAgIH0gPSB0aGlzLnN3aXBlclJlZjtcblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMucGFnaW5hdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMucGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVsICYmXG4gICAgICAgICAgcGFnaW5hdGlvbiAmJlxuICAgICAgICAgICFwYWdpbmF0aW9uLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdwYWdpbmF0aW9uJywgdGhpcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLmluaXQoKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgICAgIHBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgcGFnaW5hdGlvbi5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuc2Nyb2xsYmFyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhciAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLnNjcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXIuZWwgJiZcbiAgICAgICAgICBzY3JvbGxiYXIgJiZcbiAgICAgICAgICAhc2Nyb2xsYmFyLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdzY3JvbGxiYXInLCB0aGlzLnNjcm9sbGJhcik7XG4gICAgICAgICAgc2Nyb2xsYmFyLmluaXQoKTtcbiAgICAgICAgICBzY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMubmF2aWdhdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMubmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLnByZXZFbCAmJlxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5uZXh0RWwgJiZcbiAgICAgICAgICBuYXZpZ2F0aW9uICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ucHJldkVsICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ubmV4dEVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCduYXZpZ2F0aW9uJywgdGhpcy5uYXZpZ2F0aW9uKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hdmlnYXRpb24ucHJldkVsICYmIG5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICAgICAgbmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgbmF2aWdhdGlvbi5uZXh0RWwgPSBudWxsO1xuICAgICAgICAgIG5hdmlnYXRpb24ucHJldkVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMudGh1bWJzICYmIHRoaXMudGh1bWJzICYmIHRoaXMudGh1bWJzLnN3aXBlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcigndGh1bWJzJywgdGhpcy50aHVtYnMpO1xuICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9IHRodW1icy5pbml0KCk7XG4gICAgICAgIGlmIChpbml0aWFsaXplZCkgdGh1bWJzLnVwZGF0ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyLmNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY29udHJvbGxlci5jb250cm9sID0gdGhpcy5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXM6IFNpbXBsZUNoYW5nZXMgfCBhbnkpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29uZmlnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghKGNoYW5nZWRQYXJhbXMgJiYgdGhpcy5zd2lwZXJSZWYgJiYgIXRoaXMuc3dpcGVyUmVmLmRlc3Ryb3llZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlZFBhcmFtcykge1xuICAgICAgICBpZiAoaWdub3JlTmdPbkNoYW5nZXMuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoYW5nZWRQYXJhbXNba2V5XT8uY3VycmVudFZhbHVlID8/IGNoYW5nZWRQYXJhbXNba2V5XTtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoa2V5LCBuZXdWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVOZXh0ID0gdGhpcy5hbGxvd1NsaWRlTmV4dDtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVQcmV2KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVQcmV2ID0gdGhpcy5hbGxvd1NsaWRlUHJldjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5jaGFuZ2VEaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgICAgdGhpcy5jYWxjTG9vcGVkU2xpZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY3VycmVudEJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zZXRCcmVha3BvaW50KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnRodW1icyB8fCBjaGFuZ2VkUGFyYW1zLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbml0U3dpcGVyKGNoYW5nZWRQYXJhbXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjTG9vcGVkU2xpZGVzKCkge1xuICAgIGlmICghdGhpcy5sb29wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzbGlkZXNQZXJWaWV3UGFyYW1zID0gdGhpcy5zbGlkZXNQZXJWaWV3O1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzKSB7XG4gICAgICBjb25zdCBicmVha3BvaW50ID0gU3dpcGVyLnByb3RvdHlwZS5nZXRCcmVha3BvaW50KHRoaXMuYnJlYWtwb2ludHMpO1xuICAgICAgY29uc3QgYnJlYWtwb2ludE9ubHlQYXJhbXMgPVxuICAgICAgICBicmVha3BvaW50IGluIHRoaXMuYnJlYWtwb2ludHMgPyB0aGlzLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zICYmIGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc2xpZGVzUGVyVmlld1BhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZXNQZXJWaWV3UGFyYW1zID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMubG9vcGVkU2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgbGV0IGxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzIHx8IHNsaWRlc1BlclZpZXdQYXJhbXM7XG4gICAgaWYgKCFsb29wZWRTbGlkZXMpIHtcbiAgICAgIC8vID9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb29wQWRkaXRpb25hbFNsaWRlcykge1xuICAgICAgbG9vcGVkU2xpZGVzICs9IHRoaXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgfVxuICAgIGlmIChsb29wZWRTbGlkZXMgPiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIGxvb3BlZFNsaWRlcyA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5sb29wZWRTbGlkZXMgPSBsb29wZWRTbGlkZXM7XG4gICAgcmV0dXJuIGxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHVwZGF0ZVBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGlmICghKHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IF9rZXkgPSBrZXkucmVwbGFjZSgvXl8vLCAnJyk7XG4gICAgY29uc3QgaXNDdXJyZW50UGFyYW1PYmogPSBpc09iamVjdCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0pO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3dpcGVyUmVmLm1vZHVsZXMpLmluZGV4T2YoX2tleSkgPj0gMCkge1xuICAgICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHRoaXMuc3dpcGVyUmVmLm1vZHVsZXNbX2tleV0ucGFyYW1zW19rZXldO1xuICAgICAgaWYgKGlzQ3VycmVudFBhcmFtT2JqKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0sIGRlZmF1bHRQYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldID0gZGVmYXVsdFBhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKF9rZXkgPT09ICdlbmFibGVkJykge1xuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDdXJyZW50UGFyYW1PYmogJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtc1tfa2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHVwY29taW5nIHZlcnNpb25zXG4gICAqL1xuICBzZXRJbmRleChpbmRleDogbnVtYmVyLCBzcGVlZD86IG51bWJlciwgc2lsZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1N3aXBlckFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsU2xpZGUgPSBpbmRleDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnN3aXBlclJlZi5hY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuc2xpZGVUbyhpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmPy5kZXN0cm95KHRydWUsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9Y29udGFpbmVyLXN0YXJ0XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZpZ2F0aW9uICYmIHNob3dOYXZpZ2F0aW9uXCI+XG4gIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLXByZXZcIiAjcHJldkVsUmVmPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgI25leHRFbFJlZj48L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cInNjcm9sbGJhciAmJiBzaG93U2Nyb2xsYmFyXCIgY2xhc3M9XCJzd2lwZXItc2Nyb2xsYmFyXCIgI3Njcm9sbGJhckVsUmVmPjwvZGl2PlxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25cIiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uXCIgI3BhZ2luYXRpb25FbFJlZj48L2Rpdj5cbjxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzXCIgW2F0dHIuaWRdPVwiaWRcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1zdGFydF1cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy10ZW1wbGF0ZVxuICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgbG9vcFNsaWRlczogcHJlcGVuZFNsaWRlcyxcbiAgICAgICAga2V5OiAncHJlcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhY3RpdmVTbGlkZXMsXG4gICAgICAgIGtleTogJydcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhcHBlbmRTbGlkZXMsXG4gICAgICAgIGtleTogJ2FwcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1lbmRdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1jb250YWluZXItZW5kXVwiPjwvbmctY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNzbGlkZXNUZW1wbGF0ZSBsZXQtbG9vcFNsaWRlcz1cImxvb3BTbGlkZXNcIiBsZXQtc2xpZGVLZXk9XCJrZXlcIj5cbiAgPGRpdlxuICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBsb29wU2xpZGVzIHwgYXN5bmNcIlxuICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgKHNsaWRlLmNsYXNzID8gc2xpZGUuY2xhc3MgKyAnICcgOiAnJykgK1xuICAgICAgc2xpZGVDbGFzcyArXG4gICAgICAoc2xpZGVLZXkgIT09ICcnID8gJyAnICsgc2xpZGVEdXBsaWNhdGVDbGFzcyA6ICcnKVxuICAgIFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhdPVwic2xpZGUudmlydHVhbEluZGV4ID8gc2xpZGUudmlydHVhbEluZGV4IDogc2xpZGUuc2xpZGVJbmRleFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItYXV0b3BsYXldPVwic2xpZGUuYXV0b3BsYXlEZWxheVwiXG4gICAgW3N0eWxlXT1cInN0eWxlXCJcbiAgICBbbmdTd2l0Y2hdPVwic2xpZGUuem9vbVwiXG4gID5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgW25nQ2xhc3NdPVwiem9vbUNvbnRhaW5lckNsYXNzXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgICRpbXBsaWNpdDogc2xpZGUuc2xpZGVEYXRhXG4gICAgICAgIH1cIlxuICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAkaW1wbGljaXQ6IHNsaWRlLnNsaWRlRGF0YVxuICAgICAgICB9XCJcbiAgICAgID48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=