import assert from "assert";
import { 
  TestHelpers,
  BasedDistributorV2_Add
} from "generated";
const { MockDb, BasedDistributorV2 } = TestHelpers;

describe("BasedDistributorV2 contract Add event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for BasedDistributorV2 contract Add event
  const event = BasedDistributorV2.Add.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BasedDistributorV2_Add is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await BasedDistributorV2.Add.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBasedDistributorV2Add = mockDbUpdated.entities.BasedDistributorV2_Add.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBasedDistributorV2Add: BasedDistributorV2_Add = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      pid: event.params.pid,
      allocPoint: event.params.allocPoint,
      lpToken: event.params.lpToken,
      depositFeeBP: event.params.depositFeeBP,
      harvestInterval: event.params.harvestInterval,
      rewarders: event.params.rewarders,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBasedDistributorV2Add, expectedBasedDistributorV2Add, "Actual BasedDistributorV2Add should be the same as the expectedBasedDistributorV2Add");
  });
});
