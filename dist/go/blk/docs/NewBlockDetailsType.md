# NewBlockDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code of the new block. | [optional] 
**BlockCode** | Pointer to **string** | The block code of the new block. | [optional] 
**StartDate** | Pointer to **string** | The start date of the new block. | [optional] 
**BlockStatus** | Pointer to **string** | The booking status of the new block. | [optional] 
**BlockOrigin** | Pointer to **string** | Origin information of the block PMS/ORS/SC/SFA | [optional] 
**CateringStatus** | Pointer to **string** | The value in this field will be applied as the catering status of the new Block and all its events. | [optional] 
**BlockDatesRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**SourceDateRangeToCopy** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**GridType** | Pointer to **string** | This is the source grid type, like Original, Current, Pickup, which will be copied to the target Business Block. | [optional] 
**GridCategory** | Pointer to **[]string** |  | [optional] 
**Attendees** | Pointer to **int32** | Stores the value for no of attendees. | [optional] 
**MarketCode** | Pointer to **string** | This is used to pass the market code when a block copy is done to a different property. | [optional] 
**SourceCode** | Pointer to **string** | This is used to pass the Source code when a block copy is done to a different property. | [optional] 
**RateCode** | Pointer to **string** | This is used to pass the Source code when a block copy is done to a different property. | [optional] 

## Methods

### NewNewBlockDetailsType

`func NewNewBlockDetailsType() *NewBlockDetailsType`

NewNewBlockDetailsType instantiates a new NewBlockDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNewBlockDetailsTypeWithDefaults

`func NewNewBlockDetailsTypeWithDefaults() *NewBlockDetailsType`

NewNewBlockDetailsTypeWithDefaults instantiates a new NewBlockDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *NewBlockDetailsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *NewBlockDetailsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *NewBlockDetailsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *NewBlockDetailsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockCode

`func (o *NewBlockDetailsType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *NewBlockDetailsType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *NewBlockDetailsType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *NewBlockDetailsType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetStartDate

`func (o *NewBlockDetailsType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *NewBlockDetailsType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *NewBlockDetailsType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *NewBlockDetailsType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetBlockStatus

`func (o *NewBlockDetailsType) GetBlockStatus() string`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *NewBlockDetailsType) GetBlockStatusOk() (*string, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *NewBlockDetailsType) SetBlockStatus(v string)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *NewBlockDetailsType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockOrigin

`func (o *NewBlockDetailsType) GetBlockOrigin() string`

GetBlockOrigin returns the BlockOrigin field if non-nil, zero value otherwise.

### GetBlockOriginOk

`func (o *NewBlockDetailsType) GetBlockOriginOk() (*string, bool)`

GetBlockOriginOk returns a tuple with the BlockOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOrigin

`func (o *NewBlockDetailsType) SetBlockOrigin(v string)`

SetBlockOrigin sets BlockOrigin field to given value.

### HasBlockOrigin

`func (o *NewBlockDetailsType) HasBlockOrigin() bool`

HasBlockOrigin returns a boolean if a field has been set.

### GetCateringStatus

`func (o *NewBlockDetailsType) GetCateringStatus() string`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *NewBlockDetailsType) GetCateringStatusOk() (*string, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *NewBlockDetailsType) SetCateringStatus(v string)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *NewBlockDetailsType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetBlockDatesRange

`func (o *NewBlockDetailsType) GetBlockDatesRange() DateRangeType`

GetBlockDatesRange returns the BlockDatesRange field if non-nil, zero value otherwise.

### GetBlockDatesRangeOk

`func (o *NewBlockDetailsType) GetBlockDatesRangeOk() (*DateRangeType, bool)`

GetBlockDatesRangeOk returns a tuple with the BlockDatesRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDatesRange

`func (o *NewBlockDetailsType) SetBlockDatesRange(v DateRangeType)`

SetBlockDatesRange sets BlockDatesRange field to given value.

### HasBlockDatesRange

`func (o *NewBlockDetailsType) HasBlockDatesRange() bool`

HasBlockDatesRange returns a boolean if a field has been set.

### GetSourceDateRangeToCopy

`func (o *NewBlockDetailsType) GetSourceDateRangeToCopy() DateRangeType`

GetSourceDateRangeToCopy returns the SourceDateRangeToCopy field if non-nil, zero value otherwise.

### GetSourceDateRangeToCopyOk

`func (o *NewBlockDetailsType) GetSourceDateRangeToCopyOk() (*DateRangeType, bool)`

GetSourceDateRangeToCopyOk returns a tuple with the SourceDateRangeToCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDateRangeToCopy

`func (o *NewBlockDetailsType) SetSourceDateRangeToCopy(v DateRangeType)`

SetSourceDateRangeToCopy sets SourceDateRangeToCopy field to given value.

### HasSourceDateRangeToCopy

`func (o *NewBlockDetailsType) HasSourceDateRangeToCopy() bool`

HasSourceDateRangeToCopy returns a boolean if a field has been set.

### GetGridType

`func (o *NewBlockDetailsType) GetGridType() string`

GetGridType returns the GridType field if non-nil, zero value otherwise.

### GetGridTypeOk

`func (o *NewBlockDetailsType) GetGridTypeOk() (*string, bool)`

GetGridTypeOk returns a tuple with the GridType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridType

`func (o *NewBlockDetailsType) SetGridType(v string)`

SetGridType sets GridType field to given value.

### HasGridType

`func (o *NewBlockDetailsType) HasGridType() bool`

HasGridType returns a boolean if a field has been set.

### GetGridCategory

`func (o *NewBlockDetailsType) GetGridCategory() []string`

GetGridCategory returns the GridCategory field if non-nil, zero value otherwise.

### GetGridCategoryOk

`func (o *NewBlockDetailsType) GetGridCategoryOk() (*[]string, bool)`

GetGridCategoryOk returns a tuple with the GridCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGridCategory

`func (o *NewBlockDetailsType) SetGridCategory(v []string)`

SetGridCategory sets GridCategory field to given value.

### HasGridCategory

`func (o *NewBlockDetailsType) HasGridCategory() bool`

HasGridCategory returns a boolean if a field has been set.

### GetAttendees

`func (o *NewBlockDetailsType) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *NewBlockDetailsType) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *NewBlockDetailsType) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *NewBlockDetailsType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetMarketCode

`func (o *NewBlockDetailsType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *NewBlockDetailsType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *NewBlockDetailsType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *NewBlockDetailsType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceCode

`func (o *NewBlockDetailsType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *NewBlockDetailsType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *NewBlockDetailsType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *NewBlockDetailsType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetRateCode

`func (o *NewBlockDetailsType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *NewBlockDetailsType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *NewBlockDetailsType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *NewBlockDetailsType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


