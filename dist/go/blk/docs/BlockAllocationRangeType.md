# BlockAllocationRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**RoomTypes** | Pointer to **[]string** | List of room types for which the range update has to be applied. | [optional] 
**BeginDate** | Pointer to **string** | Begin date for range update operation. | [optional] 
**EndDate** | Pointer to **string** | End date for range update operation. | [optional] 
**AllocationType** | Pointer to [**AllocationType**](AllocationType.md) |  | [optional] 
**IncrementFlag** | Pointer to **bool** | Flag to indicate if the occupancy data is absolute or relative to the current value. | [optional] 
**BlockInventory** | Pointer to [**BlockGridInvType**](BlockGridInvType.md) |  | [optional] 
**BlockRates** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**CutoffDate** | Pointer to **string** | Date after which unused block rooms should be returned to house. | [optional] 
**CutoffDays** | Pointer to **int32** | Number of days from block start date after which unused block rooms should be returned to house. | [optional] 
**OverrideCutoffSchedule** | Pointer to **bool** | A true value indicates that the cutoff schedule, if added to Business Block, can be overridden. | [optional] 
**IncludedDays** | Pointer to **string** |  | [optional] 
**RangeMode** | Pointer to [**BlockRangeModeType**](BlockRangeModeType.md) |  | [optional] 
**OverbookList** | Pointer to [**[]BlockAllocationRangeTypeOverbookListInner**](BlockAllocationRangeTypeOverbookListInner.md) | Date which has to be overbooked or excluded. | [optional] 
**GenericRoomType** | Pointer to **bool** | Indicates if the Allocation objects refer to Generic Room Types (Room Pools). | [optional] 

## Methods

### NewBlockAllocationRangeType

`func NewBlockAllocationRangeType() *BlockAllocationRangeType`

NewBlockAllocationRangeType instantiates a new BlockAllocationRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAllocationRangeTypeWithDefaults

`func NewBlockAllocationRangeTypeWithDefaults() *BlockAllocationRangeType`

NewBlockAllocationRangeTypeWithDefaults instantiates a new BlockAllocationRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BlockAllocationRangeType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockAllocationRangeType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockAllocationRangeType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockAllocationRangeType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAllocationRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAllocationRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAllocationRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAllocationRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomTypes

`func (o *BlockAllocationRangeType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockAllocationRangeType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockAllocationRangeType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockAllocationRangeType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetBeginDate

`func (o *BlockAllocationRangeType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *BlockAllocationRangeType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *BlockAllocationRangeType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *BlockAllocationRangeType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockAllocationRangeType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockAllocationRangeType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockAllocationRangeType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockAllocationRangeType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetAllocationType

`func (o *BlockAllocationRangeType) GetAllocationType() AllocationType`

GetAllocationType returns the AllocationType field if non-nil, zero value otherwise.

### GetAllocationTypeOk

`func (o *BlockAllocationRangeType) GetAllocationTypeOk() (*AllocationType, bool)`

GetAllocationTypeOk returns a tuple with the AllocationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationType

`func (o *BlockAllocationRangeType) SetAllocationType(v AllocationType)`

SetAllocationType sets AllocationType field to given value.

### HasAllocationType

`func (o *BlockAllocationRangeType) HasAllocationType() bool`

HasAllocationType returns a boolean if a field has been set.

### GetIncrementFlag

`func (o *BlockAllocationRangeType) GetIncrementFlag() bool`

GetIncrementFlag returns the IncrementFlag field if non-nil, zero value otherwise.

### GetIncrementFlagOk

`func (o *BlockAllocationRangeType) GetIncrementFlagOk() (*bool, bool)`

GetIncrementFlagOk returns a tuple with the IncrementFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncrementFlag

`func (o *BlockAllocationRangeType) SetIncrementFlag(v bool)`

SetIncrementFlag sets IncrementFlag field to given value.

### HasIncrementFlag

`func (o *BlockAllocationRangeType) HasIncrementFlag() bool`

HasIncrementFlag returns a boolean if a field has been set.

### GetBlockInventory

`func (o *BlockAllocationRangeType) GetBlockInventory() BlockGridInvType`

GetBlockInventory returns the BlockInventory field if non-nil, zero value otherwise.

### GetBlockInventoryOk

`func (o *BlockAllocationRangeType) GetBlockInventoryOk() (*BlockGridInvType, bool)`

GetBlockInventoryOk returns a tuple with the BlockInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInventory

`func (o *BlockAllocationRangeType) SetBlockInventory(v BlockGridInvType)`

SetBlockInventory sets BlockInventory field to given value.

### HasBlockInventory

`func (o *BlockAllocationRangeType) HasBlockInventory() bool`

HasBlockInventory returns a boolean if a field has been set.

### GetBlockRates

`func (o *BlockAllocationRangeType) GetBlockRates() BlockGridRatesType`

GetBlockRates returns the BlockRates field if non-nil, zero value otherwise.

### GetBlockRatesOk

`func (o *BlockAllocationRangeType) GetBlockRatesOk() (*BlockGridRatesType, bool)`

GetBlockRatesOk returns a tuple with the BlockRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRates

`func (o *BlockAllocationRangeType) SetBlockRates(v BlockGridRatesType)`

SetBlockRates sets BlockRates field to given value.

### HasBlockRates

`func (o *BlockAllocationRangeType) HasBlockRates() bool`

HasBlockRates returns a boolean if a field has been set.

### GetCutoffDate

`func (o *BlockAllocationRangeType) GetCutoffDate() string`

GetCutoffDate returns the CutoffDate field if non-nil, zero value otherwise.

### GetCutoffDateOk

`func (o *BlockAllocationRangeType) GetCutoffDateOk() (*string, bool)`

GetCutoffDateOk returns a tuple with the CutoffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDate

`func (o *BlockAllocationRangeType) SetCutoffDate(v string)`

SetCutoffDate sets CutoffDate field to given value.

### HasCutoffDate

`func (o *BlockAllocationRangeType) HasCutoffDate() bool`

HasCutoffDate returns a boolean if a field has been set.

### GetCutoffDays

`func (o *BlockAllocationRangeType) GetCutoffDays() int32`

GetCutoffDays returns the CutoffDays field if non-nil, zero value otherwise.

### GetCutoffDaysOk

`func (o *BlockAllocationRangeType) GetCutoffDaysOk() (*int32, bool)`

GetCutoffDaysOk returns a tuple with the CutoffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDays

`func (o *BlockAllocationRangeType) SetCutoffDays(v int32)`

SetCutoffDays sets CutoffDays field to given value.

### HasCutoffDays

`func (o *BlockAllocationRangeType) HasCutoffDays() bool`

HasCutoffDays returns a boolean if a field has been set.

### GetOverrideCutoffSchedule

`func (o *BlockAllocationRangeType) GetOverrideCutoffSchedule() bool`

GetOverrideCutoffSchedule returns the OverrideCutoffSchedule field if non-nil, zero value otherwise.

### GetOverrideCutoffScheduleOk

`func (o *BlockAllocationRangeType) GetOverrideCutoffScheduleOk() (*bool, bool)`

GetOverrideCutoffScheduleOk returns a tuple with the OverrideCutoffSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCutoffSchedule

`func (o *BlockAllocationRangeType) SetOverrideCutoffSchedule(v bool)`

SetOverrideCutoffSchedule sets OverrideCutoffSchedule field to given value.

### HasOverrideCutoffSchedule

`func (o *BlockAllocationRangeType) HasOverrideCutoffSchedule() bool`

HasOverrideCutoffSchedule returns a boolean if a field has been set.

### GetIncludedDays

`func (o *BlockAllocationRangeType) GetIncludedDays() string`

GetIncludedDays returns the IncludedDays field if non-nil, zero value otherwise.

### GetIncludedDaysOk

`func (o *BlockAllocationRangeType) GetIncludedDaysOk() (*string, bool)`

GetIncludedDaysOk returns a tuple with the IncludedDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedDays

`func (o *BlockAllocationRangeType) SetIncludedDays(v string)`

SetIncludedDays sets IncludedDays field to given value.

### HasIncludedDays

`func (o *BlockAllocationRangeType) HasIncludedDays() bool`

HasIncludedDays returns a boolean if a field has been set.

### GetRangeMode

`func (o *BlockAllocationRangeType) GetRangeMode() BlockRangeModeType`

GetRangeMode returns the RangeMode field if non-nil, zero value otherwise.

### GetRangeModeOk

`func (o *BlockAllocationRangeType) GetRangeModeOk() (*BlockRangeModeType, bool)`

GetRangeModeOk returns a tuple with the RangeMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeMode

`func (o *BlockAllocationRangeType) SetRangeMode(v BlockRangeModeType)`

SetRangeMode sets RangeMode field to given value.

### HasRangeMode

`func (o *BlockAllocationRangeType) HasRangeMode() bool`

HasRangeMode returns a boolean if a field has been set.

### GetOverbookList

`func (o *BlockAllocationRangeType) GetOverbookList() []BlockAllocationRangeTypeOverbookListInner`

GetOverbookList returns the OverbookList field if non-nil, zero value otherwise.

### GetOverbookListOk

`func (o *BlockAllocationRangeType) GetOverbookListOk() (*[]BlockAllocationRangeTypeOverbookListInner, bool)`

GetOverbookListOk returns a tuple with the OverbookList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookList

`func (o *BlockAllocationRangeType) SetOverbookList(v []BlockAllocationRangeTypeOverbookListInner)`

SetOverbookList sets OverbookList field to given value.

### HasOverbookList

`func (o *BlockAllocationRangeType) HasOverbookList() bool`

HasOverbookList returns a boolean if a field has been set.

### GetGenericRoomType

`func (o *BlockAllocationRangeType) GetGenericRoomType() bool`

GetGenericRoomType returns the GenericRoomType field if non-nil, zero value otherwise.

### GetGenericRoomTypeOk

`func (o *BlockAllocationRangeType) GetGenericRoomTypeOk() (*bool, bool)`

GetGenericRoomTypeOk returns a tuple with the GenericRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomType

`func (o *BlockAllocationRangeType) SetGenericRoomType(v bool)`

SetGenericRoomType sets GenericRoomType field to given value.

### HasGenericRoomType

`func (o *BlockAllocationRangeType) HasGenericRoomType() bool`

HasGenericRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


