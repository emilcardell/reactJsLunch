import evens from 'evens';

const aStructure = {
    aFunction() {
        let odds = evens.map((v) => {
            v + 1
        });
        return odds;
    }
};

export default aStructure;
