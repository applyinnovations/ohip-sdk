# ARAgingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgingBucketRange** | Pointer to **string** | The bucket description in terms of days. Example : 0-31 days | [optional] 
**AgingDate** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**BalanceInfo** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 
**AgingStartDay** | Pointer to **int32** | The start number of days for this Aging bucket. Example: For the range 31-60 days, this would be 31. | [optional] 
**AgingEndDay** | Pointer to **int32** | The end number of days for this Aging bucket. Example: For the range 31-60 days, this would be 60. | [optional] 
**Sequence** | Pointer to **int32** | The sequence for display. | [optional] 

## Methods

### NewARAgingType

`func NewARAgingType() *ARAgingType`

NewARAgingType instantiates a new ARAgingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAgingTypeWithDefaults

`func NewARAgingTypeWithDefaults() *ARAgingType`

NewARAgingTypeWithDefaults instantiates a new ARAgingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgingBucketRange

`func (o *ARAgingType) GetAgingBucketRange() string`

GetAgingBucketRange returns the AgingBucketRange field if non-nil, zero value otherwise.

### GetAgingBucketRangeOk

`func (o *ARAgingType) GetAgingBucketRangeOk() (*string, bool)`

GetAgingBucketRangeOk returns a tuple with the AgingBucketRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingBucketRange

`func (o *ARAgingType) SetAgingBucketRange(v string)`

SetAgingBucketRange sets AgingBucketRange field to given value.

### HasAgingBucketRange

`func (o *ARAgingType) HasAgingBucketRange() bool`

HasAgingBucketRange returns a boolean if a field has been set.

### GetAgingDate

`func (o *ARAgingType) GetAgingDate() DateRangeType`

GetAgingDate returns the AgingDate field if non-nil, zero value otherwise.

### GetAgingDateOk

`func (o *ARAgingType) GetAgingDateOk() (*DateRangeType, bool)`

GetAgingDateOk returns a tuple with the AgingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingDate

`func (o *ARAgingType) SetAgingDate(v DateRangeType)`

SetAgingDate sets AgingDate field to given value.

### HasAgingDate

`func (o *ARAgingType) HasAgingDate() bool`

HasAgingDate returns a boolean if a field has been set.

### GetBalanceInfo

`func (o *ARAgingType) GetBalanceInfo() ARBalanceType`

GetBalanceInfo returns the BalanceInfo field if non-nil, zero value otherwise.

### GetBalanceInfoOk

`func (o *ARAgingType) GetBalanceInfoOk() (*ARBalanceType, bool)`

GetBalanceInfoOk returns a tuple with the BalanceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceInfo

`func (o *ARAgingType) SetBalanceInfo(v ARBalanceType)`

SetBalanceInfo sets BalanceInfo field to given value.

### HasBalanceInfo

`func (o *ARAgingType) HasBalanceInfo() bool`

HasBalanceInfo returns a boolean if a field has been set.

### GetAgingStartDay

`func (o *ARAgingType) GetAgingStartDay() int32`

GetAgingStartDay returns the AgingStartDay field if non-nil, zero value otherwise.

### GetAgingStartDayOk

`func (o *ARAgingType) GetAgingStartDayOk() (*int32, bool)`

GetAgingStartDayOk returns a tuple with the AgingStartDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingStartDay

`func (o *ARAgingType) SetAgingStartDay(v int32)`

SetAgingStartDay sets AgingStartDay field to given value.

### HasAgingStartDay

`func (o *ARAgingType) HasAgingStartDay() bool`

HasAgingStartDay returns a boolean if a field has been set.

### GetAgingEndDay

`func (o *ARAgingType) GetAgingEndDay() int32`

GetAgingEndDay returns the AgingEndDay field if non-nil, zero value otherwise.

### GetAgingEndDayOk

`func (o *ARAgingType) GetAgingEndDayOk() (*int32, bool)`

GetAgingEndDayOk returns a tuple with the AgingEndDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingEndDay

`func (o *ARAgingType) SetAgingEndDay(v int32)`

SetAgingEndDay sets AgingEndDay field to given value.

### HasAgingEndDay

`func (o *ARAgingType) HasAgingEndDay() bool`

HasAgingEndDay returns a boolean if a field has been set.

### GetSequence

`func (o *ARAgingType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ARAgingType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ARAgingType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ARAgingType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


