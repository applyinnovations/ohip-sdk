# BlockAllocationSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**BlockCode** | Pointer to **string** | Defined block code for the block. | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**MasterBlockId** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Status** | Pointer to **string** | Booking Status of the block. | [optional] 
**MarketCode** | Pointer to **string** | Market Code of the block. | [optional] 
**StartDate** | Pointer to **time.Time** |  | [optional] 
**EndDate** | Pointer to **time.Time** |  | [optional] 
**CutOffDate** | Pointer to **time.Time** |  | [optional] 
**CutOffDays** | Pointer to **int32** |  | [optional] 
**CancellationDate** | Pointer to **time.Time** | Cancellation Date. | [optional] 
**CancellationCode** | Pointer to **string** | Code that idenfies the reason for cancellation. | [optional] 
**CancellationDescription** | Pointer to **string** | Description that explains the reason for cancellation. | [optional] 
**CateringOwner** | Pointer to **int32** | Catering Owner | [optional] 
**CateringOwnerCode** | Pointer to **string** | Primary Catering Owner Code | [optional] 
**CateringOwnerResort** | Pointer to **string** | Property of Catering Owner | [optional] 
**Owner** | Pointer to **int32** | Owner ID | [optional] 
**OwnerCode** | Pointer to **string** | Block Owner Code | [optional] 
**OwnerResort** | Pointer to **string** | Property of Business Block Owner | [optional] 
**RoomsOwner** | Pointer to **int32** | Rooms Owner | [optional] 
**RoomsOwnerCode** | Pointer to **string** | Primary Rooms Owner Code | [optional] 
**RoomsOwnerResort** | Pointer to **string** | Property of Rooms Owner | [optional] 
**CreateDateTime** | Pointer to **time.Time** | The business date the block was created. | [optional] 
**BlockType** | Pointer to **string** | Indicates the internal type of the block like G, etc. | [optional] 
**ReservationMethod** | Pointer to **string** | Booking Method. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate code associated with Block. | [optional] 
**LastModifiedDate** | Pointer to **time.Time** | Date Time when the block was modified last. | [optional] 
**SourceCode** | Pointer to **string** | Source of the Block. | [optional] 
**AllocationDates** | Pointer to [**[]RoomAllocationDateType**](RoomAllocationDateType.md) |  | [optional] 

## Methods

### NewBlockAllocationSummaryType

`func NewBlockAllocationSummaryType() *BlockAllocationSummaryType`

NewBlockAllocationSummaryType instantiates a new BlockAllocationSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAllocationSummaryTypeWithDefaults

`func NewBlockAllocationSummaryTypeWithDefaults() *BlockAllocationSummaryType`

NewBlockAllocationSummaryTypeWithDefaults instantiates a new BlockAllocationSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BlockAllocationSummaryType) GetBlockId() string`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockAllocationSummaryType) GetBlockIdOk() (*string, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockAllocationSummaryType) SetBlockId(v string)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockAllocationSummaryType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockAllocationSummaryType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockAllocationSummaryType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockAllocationSummaryType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockAllocationSummaryType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockName

`func (o *BlockAllocationSummaryType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockAllocationSummaryType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockAllocationSummaryType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockAllocationSummaryType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetMasterBlockId

`func (o *BlockAllocationSummaryType) GetMasterBlockId() string`

GetMasterBlockId returns the MasterBlockId field if non-nil, zero value otherwise.

### GetMasterBlockIdOk

`func (o *BlockAllocationSummaryType) GetMasterBlockIdOk() (*string, bool)`

GetMasterBlockIdOk returns a tuple with the MasterBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlockId

`func (o *BlockAllocationSummaryType) SetMasterBlockId(v string)`

SetMasterBlockId sets MasterBlockId field to given value.

### HasMasterBlockId

`func (o *BlockAllocationSummaryType) HasMasterBlockId() bool`

HasMasterBlockId returns a boolean if a field has been set.

### GetStatus

`func (o *BlockAllocationSummaryType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BlockAllocationSummaryType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BlockAllocationSummaryType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BlockAllocationSummaryType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMarketCode

`func (o *BlockAllocationSummaryType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *BlockAllocationSummaryType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *BlockAllocationSummaryType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *BlockAllocationSummaryType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockAllocationSummaryType) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockAllocationSummaryType) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockAllocationSummaryType) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockAllocationSummaryType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockAllocationSummaryType) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockAllocationSummaryType) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockAllocationSummaryType) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockAllocationSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetCutOffDate

`func (o *BlockAllocationSummaryType) GetCutOffDate() time.Time`

GetCutOffDate returns the CutOffDate field if non-nil, zero value otherwise.

### GetCutOffDateOk

`func (o *BlockAllocationSummaryType) GetCutOffDateOk() (*time.Time, bool)`

GetCutOffDateOk returns a tuple with the CutOffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutOffDate

`func (o *BlockAllocationSummaryType) SetCutOffDate(v time.Time)`

SetCutOffDate sets CutOffDate field to given value.

### HasCutOffDate

`func (o *BlockAllocationSummaryType) HasCutOffDate() bool`

HasCutOffDate returns a boolean if a field has been set.

### GetCutOffDays

`func (o *BlockAllocationSummaryType) GetCutOffDays() int32`

GetCutOffDays returns the CutOffDays field if non-nil, zero value otherwise.

### GetCutOffDaysOk

`func (o *BlockAllocationSummaryType) GetCutOffDaysOk() (*int32, bool)`

GetCutOffDaysOk returns a tuple with the CutOffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutOffDays

`func (o *BlockAllocationSummaryType) SetCutOffDays(v int32)`

SetCutOffDays sets CutOffDays field to given value.

### HasCutOffDays

`func (o *BlockAllocationSummaryType) HasCutOffDays() bool`

HasCutOffDays returns a boolean if a field has been set.

### GetCancellationDate

`func (o *BlockAllocationSummaryType) GetCancellationDate() time.Time`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *BlockAllocationSummaryType) GetCancellationDateOk() (*time.Time, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *BlockAllocationSummaryType) SetCancellationDate(v time.Time)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *BlockAllocationSummaryType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetCancellationCode

`func (o *BlockAllocationSummaryType) GetCancellationCode() string`

GetCancellationCode returns the CancellationCode field if non-nil, zero value otherwise.

### GetCancellationCodeOk

`func (o *BlockAllocationSummaryType) GetCancellationCodeOk() (*string, bool)`

GetCancellationCodeOk returns a tuple with the CancellationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCode

`func (o *BlockAllocationSummaryType) SetCancellationCode(v string)`

SetCancellationCode sets CancellationCode field to given value.

### HasCancellationCode

`func (o *BlockAllocationSummaryType) HasCancellationCode() bool`

HasCancellationCode returns a boolean if a field has been set.

### GetCancellationDescription

`func (o *BlockAllocationSummaryType) GetCancellationDescription() string`

GetCancellationDescription returns the CancellationDescription field if non-nil, zero value otherwise.

### GetCancellationDescriptionOk

`func (o *BlockAllocationSummaryType) GetCancellationDescriptionOk() (*string, bool)`

GetCancellationDescriptionOk returns a tuple with the CancellationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDescription

`func (o *BlockAllocationSummaryType) SetCancellationDescription(v string)`

SetCancellationDescription sets CancellationDescription field to given value.

### HasCancellationDescription

`func (o *BlockAllocationSummaryType) HasCancellationDescription() bool`

HasCancellationDescription returns a boolean if a field has been set.

### GetCateringOwner

`func (o *BlockAllocationSummaryType) GetCateringOwner() int32`

GetCateringOwner returns the CateringOwner field if non-nil, zero value otherwise.

### GetCateringOwnerOk

`func (o *BlockAllocationSummaryType) GetCateringOwnerOk() (*int32, bool)`

GetCateringOwnerOk returns a tuple with the CateringOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOwner

`func (o *BlockAllocationSummaryType) SetCateringOwner(v int32)`

SetCateringOwner sets CateringOwner field to given value.

### HasCateringOwner

`func (o *BlockAllocationSummaryType) HasCateringOwner() bool`

HasCateringOwner returns a boolean if a field has been set.

### GetCateringOwnerCode

`func (o *BlockAllocationSummaryType) GetCateringOwnerCode() string`

GetCateringOwnerCode returns the CateringOwnerCode field if non-nil, zero value otherwise.

### GetCateringOwnerCodeOk

`func (o *BlockAllocationSummaryType) GetCateringOwnerCodeOk() (*string, bool)`

GetCateringOwnerCodeOk returns a tuple with the CateringOwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOwnerCode

`func (o *BlockAllocationSummaryType) SetCateringOwnerCode(v string)`

SetCateringOwnerCode sets CateringOwnerCode field to given value.

### HasCateringOwnerCode

`func (o *BlockAllocationSummaryType) HasCateringOwnerCode() bool`

HasCateringOwnerCode returns a boolean if a field has been set.

### GetCateringOwnerResort

`func (o *BlockAllocationSummaryType) GetCateringOwnerResort() string`

GetCateringOwnerResort returns the CateringOwnerResort field if non-nil, zero value otherwise.

### GetCateringOwnerResortOk

`func (o *BlockAllocationSummaryType) GetCateringOwnerResortOk() (*string, bool)`

GetCateringOwnerResortOk returns a tuple with the CateringOwnerResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOwnerResort

`func (o *BlockAllocationSummaryType) SetCateringOwnerResort(v string)`

SetCateringOwnerResort sets CateringOwnerResort field to given value.

### HasCateringOwnerResort

`func (o *BlockAllocationSummaryType) HasCateringOwnerResort() bool`

HasCateringOwnerResort returns a boolean if a field has been set.

### GetOwner

`func (o *BlockAllocationSummaryType) GetOwner() int32`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *BlockAllocationSummaryType) GetOwnerOk() (*int32, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *BlockAllocationSummaryType) SetOwner(v int32)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *BlockAllocationSummaryType) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOwnerCode

`func (o *BlockAllocationSummaryType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *BlockAllocationSummaryType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *BlockAllocationSummaryType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *BlockAllocationSummaryType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetOwnerResort

`func (o *BlockAllocationSummaryType) GetOwnerResort() string`

GetOwnerResort returns the OwnerResort field if non-nil, zero value otherwise.

### GetOwnerResortOk

`func (o *BlockAllocationSummaryType) GetOwnerResortOk() (*string, bool)`

GetOwnerResortOk returns a tuple with the OwnerResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerResort

`func (o *BlockAllocationSummaryType) SetOwnerResort(v string)`

SetOwnerResort sets OwnerResort field to given value.

### HasOwnerResort

`func (o *BlockAllocationSummaryType) HasOwnerResort() bool`

HasOwnerResort returns a boolean if a field has been set.

### GetRoomsOwner

`func (o *BlockAllocationSummaryType) GetRoomsOwner() int32`

GetRoomsOwner returns the RoomsOwner field if non-nil, zero value otherwise.

### GetRoomsOwnerOk

`func (o *BlockAllocationSummaryType) GetRoomsOwnerOk() (*int32, bool)`

GetRoomsOwnerOk returns a tuple with the RoomsOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsOwner

`func (o *BlockAllocationSummaryType) SetRoomsOwner(v int32)`

SetRoomsOwner sets RoomsOwner field to given value.

### HasRoomsOwner

`func (o *BlockAllocationSummaryType) HasRoomsOwner() bool`

HasRoomsOwner returns a boolean if a field has been set.

### GetRoomsOwnerCode

`func (o *BlockAllocationSummaryType) GetRoomsOwnerCode() string`

GetRoomsOwnerCode returns the RoomsOwnerCode field if non-nil, zero value otherwise.

### GetRoomsOwnerCodeOk

`func (o *BlockAllocationSummaryType) GetRoomsOwnerCodeOk() (*string, bool)`

GetRoomsOwnerCodeOk returns a tuple with the RoomsOwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsOwnerCode

`func (o *BlockAllocationSummaryType) SetRoomsOwnerCode(v string)`

SetRoomsOwnerCode sets RoomsOwnerCode field to given value.

### HasRoomsOwnerCode

`func (o *BlockAllocationSummaryType) HasRoomsOwnerCode() bool`

HasRoomsOwnerCode returns a boolean if a field has been set.

### GetRoomsOwnerResort

`func (o *BlockAllocationSummaryType) GetRoomsOwnerResort() string`

GetRoomsOwnerResort returns the RoomsOwnerResort field if non-nil, zero value otherwise.

### GetRoomsOwnerResortOk

`func (o *BlockAllocationSummaryType) GetRoomsOwnerResortOk() (*string, bool)`

GetRoomsOwnerResortOk returns a tuple with the RoomsOwnerResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsOwnerResort

`func (o *BlockAllocationSummaryType) SetRoomsOwnerResort(v string)`

SetRoomsOwnerResort sets RoomsOwnerResort field to given value.

### HasRoomsOwnerResort

`func (o *BlockAllocationSummaryType) HasRoomsOwnerResort() bool`

HasRoomsOwnerResort returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BlockAllocationSummaryType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockAllocationSummaryType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockAllocationSummaryType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BlockAllocationSummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetBlockType

`func (o *BlockAllocationSummaryType) GetBlockType() string`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *BlockAllocationSummaryType) GetBlockTypeOk() (*string, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *BlockAllocationSummaryType) SetBlockType(v string)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *BlockAllocationSummaryType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetReservationMethod

`func (o *BlockAllocationSummaryType) GetReservationMethod() string`

GetReservationMethod returns the ReservationMethod field if non-nil, zero value otherwise.

### GetReservationMethodOk

`func (o *BlockAllocationSummaryType) GetReservationMethodOk() (*string, bool)`

GetReservationMethodOk returns a tuple with the ReservationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMethod

`func (o *BlockAllocationSummaryType) SetReservationMethod(v string)`

SetReservationMethod sets ReservationMethod field to given value.

### HasReservationMethod

`func (o *BlockAllocationSummaryType) HasReservationMethod() bool`

HasReservationMethod returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *BlockAllocationSummaryType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockAllocationSummaryType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockAllocationSummaryType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockAllocationSummaryType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetLastModifiedDate

`func (o *BlockAllocationSummaryType) GetLastModifiedDate() time.Time`

GetLastModifiedDate returns the LastModifiedDate field if non-nil, zero value otherwise.

### GetLastModifiedDateOk

`func (o *BlockAllocationSummaryType) GetLastModifiedDateOk() (*time.Time, bool)`

GetLastModifiedDateOk returns a tuple with the LastModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedDate

`func (o *BlockAllocationSummaryType) SetLastModifiedDate(v time.Time)`

SetLastModifiedDate sets LastModifiedDate field to given value.

### HasLastModifiedDate

`func (o *BlockAllocationSummaryType) HasLastModifiedDate() bool`

HasLastModifiedDate returns a boolean if a field has been set.

### GetSourceCode

`func (o *BlockAllocationSummaryType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *BlockAllocationSummaryType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *BlockAllocationSummaryType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *BlockAllocationSummaryType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetAllocationDates

`func (o *BlockAllocationSummaryType) GetAllocationDates() []RoomAllocationDateType`

GetAllocationDates returns the AllocationDates field if non-nil, zero value otherwise.

### GetAllocationDatesOk

`func (o *BlockAllocationSummaryType) GetAllocationDatesOk() (*[]RoomAllocationDateType, bool)`

GetAllocationDatesOk returns a tuple with the AllocationDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocationDates

`func (o *BlockAllocationSummaryType) SetAllocationDates(v []RoomAllocationDateType)`

SetAllocationDates sets AllocationDates field to given value.

### HasAllocationDates

`func (o *BlockAllocationSummaryType) HasAllocationDates() bool`

HasAllocationDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


