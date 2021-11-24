import  { shallowMount, createLocalVue }  from '@vue/test-utils';
import Vuex from 'vuex';
import SideBar from '../src/components/sidebar.vue';
import QuestionExplorer from '../src/components/subcomponents/questionexplorer/_questionExplorer.vue';
import AddQuestionGroupAndAddQuestionButtons from '../src/components/subcomponents/questionexplorer/_addQuestionGroupAndAddQuestionButtons.vue';
import ListOfAllQuestionGroupsWithQuestions from '../src/components/subcomponents/questionexplorer/_listOfAllQuestionGroupsWithQuestions.vue';

// Mixins
import pjaxMixins from '../src/mixins/pjaxMixins.js';
import translateMixins from '../src/mixins/translateMixins.js';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Admin Sidemenu Funtionalities', () => {

    /** test('does it exists', () => {
        const store = new Vuex.Store({
            state: {
                '$': {},
            },
        });
        localVue.use(store);
        localVue.use(translateMixins);

        const wrapper = shallowMount(SideBar, {
            localVue,
            store,
            propsData: {
                landOnTab: 'Settings',
                isSideMenuElementActive: false,
                activeSideMenuElement: ''
            },
            data() {
                return {
                    activeMenuElement: 0,
                    openSubpanelId: 0,
                    menues: [],
                    collapsed: false,
                    sideBarWidth: "315",
                    sideBarHeight: "400px",
                    initialPos: {
                        x: 0,
                        y: 0
                    },
                    isMouseDown: false,
                    isMouseDownTimeOut: null,
                    showLoader: false,
                    loading: true,
                    hiddenStateToggleDisplay: 'flex',
                    smallScreenHidden: false,
                }
            }
        });      
        expect(wrapper.vm._isVue).toBe(true);
        wrapper.destroy();
    });*/

    test('Create Question and Create Question Group Buttons are visible', () => {
        const store = new Vuex.Store({
            state: {
                'SideMenuData': {
                    'translate': {
                        'lockOrganizerTitle': 'Lock question organizer',
                        'unlockOrganizerTitle': 'Unlock question organizer',
                    },
                    'createQuestionGroupLink': 'createQuestionGroupLinkMock',
                    'createQuestionLink': 'createQuestionLinkMock',
                    'buttonDisabledTooltipQuestions': 'Add Question Button is disbaled',
                    'buttonDisabledTooltipGroups': 'Add Question Group Button is disabled',
                    'lockOrganizerTitle': 'Lock question organizer',
                    'unlockOrganizerTitle': 'Unlock question organizer',
                }
            },
            mutations: {
                newToggleKey (state) {
                    state.toggleKey = Math.floor(Math.random()*10000)+'--key';
                },
            }
        });
        localVue.use(store);
        localVue.use(translateMixins);
        const addquestiongroupandaddquestionbuttons = shallowMount(AddQuestionGroupAndAddQuestionButtons, {
            localVue,
            store,
            propsData: {
                isSurveyActive: true,
                createQuestionGroupLink: 'createQuestionGroupLinkMock',
                createQuestionLink: 'createQuestionLinkMock',
                isCreateQuestionAllowed: true,
                allowOrganizer: true,
            },
            data() {
                return {

                }
            }
        });
        
        expect(addquestiongroupandaddquestionbuttons.vm._isVue).toBe(true);
        addquestiongroupandaddquestionbuttons.destroy();
    });

    test('List of all Questions Groups with Questions', () => {
        const store = new Vuex.Store({
            state: {
                'SideMenuData': {
                    
                }
            },
        });
        localVue.use(store);
        
        const listofallquestiongroupswithquestions = shallowMount(ListOfAllQuestionGroupsWithQuestions, {
            localVue,
            store,
            propsData: {
                isSurveyActive: true,
                allowOrganizer: true,
                currentlyDraggingQuestionGroups: false,
            },
            data() {
                return {
                    openQuestionGroups: [],
                }
            }
        });
        
        expect(listofallquestiongroupswithquestions.vm._isVue).toBe(true);
        listofallquestiongroupswithquestions.destroy();
    });

    test('owns Questions', () => {
        const store = new Vuex.Store({
            state: {
                'lastQuestionGroupOpen': 1,
                'questiongroups': [
                    {gid: 1}
                ],
                'questionGroupOpenArray': [],
                'lastQuestionGroupOpen': false,
                'SideMenuData': {
                    'isActive': false,
                    'createQuestionGroupLink': 'createQuestionGroupLinkMock',
                    'createQuestionLink': 'createQuestionLinkMock',
                    'buttonDisabledTooltipQuestions': 'Add Question Button is disbaled',
                    'buttonDisabledTooltipGroups': 'Add Question Group Button is disabled',
                }
            },
            mutations: {
                newToggleKey (state) {
                    state.toggleKey = Math.floor(Math.random()*10000)+'--key';
                },
            }
        });
        localVue.use(store);
        localVue.use(pjaxMixins);
        localVue.use(translateMixins);

      /**   const questionexplorer = shallowMount(QuestionExplorer, {
            localVue,
            store,
            data() {
                return {
                    openQuestionGroups: [],
                    currentlyDraggingQuestionGroups: false,
                    draggedQuestionGroup: null,
                    questionDragging: false,
                    draggedQuestions: null,
                    draggedQuestionsGroup: null,
                    questionGroups: [],
                    lastQuestionGroupOpened: false,
                    isSurveyActive: false,
                    createQuestionGroupLinkString: '',
                    createQuestionLinkString: '',
                    sideMenuData: [],
                }
            },
            mixins: pjaxMixins,
        });*/
      /*  const wrapper = shallowMount(SideBar, {
            localVue,
            store,
            propsData: {
                landOnTab: 'Settings',
                isSideMenuElementActive: false,
                activeSideMenuElement: ''
            },
            data() {
                return {
                    activeMenuElement: 0,
                    openSubpanelId: 0,
                    menues: [],
                    collapsed: false,
                    sideBarWidth: "315",
                    sideBarHeight: "400px",
                    initialPos: {
                        x: 0,
                        y: 0
                    },
                    isMouseDown: false,
                    isMouseDownTimeOut: null,
                    showLoader: false,
                    loading: true,
                    hiddenStateToggleDisplay: 'flex',
                    smallScreenHidden: false,
                }
            },
            stubs: {
                'registered-component': questionexplorer,
                'another-component': true,
            }
        });*/

     //   expect(wrapper.vm.$children).toBeDefined();
     //   expect(wrapper.vm.$children[0].$options._base.component.name).toBe('QuestionExplorer');

       // questionexplorer.destroy();
       // wrapper.destroy();
    });
});