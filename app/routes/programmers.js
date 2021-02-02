import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Anton Bavykin', 'Sergey Verzhbitkij', 'Alexey Ivanov'];
    }
}
