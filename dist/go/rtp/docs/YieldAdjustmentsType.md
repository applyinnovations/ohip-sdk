# YieldAdjustmentsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the Adjustments. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**YieldAdjustment** | Pointer to [**[]YieldInfoType**](YieldInfoType.md) | Details of the adjustment codes. | [optional] 

## Methods

### NewYieldAdjustmentsType

`func NewYieldAdjustmentsType() *YieldAdjustmentsType`

NewYieldAdjustmentsType instantiates a new YieldAdjustmentsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldAdjustmentsTypeWithDefaults

`func NewYieldAdjustmentsTypeWithDefaults() *YieldAdjustmentsType`

NewYieldAdjustmentsTypeWithDefaults instantiates a new YieldAdjustmentsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *YieldAdjustmentsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *YieldAdjustmentsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *YieldAdjustmentsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *YieldAdjustmentsType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *YieldAdjustmentsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *YieldAdjustmentsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *YieldAdjustmentsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *YieldAdjustmentsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetHotelId

`func (o *YieldAdjustmentsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldAdjustmentsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldAdjustmentsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldAdjustmentsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTotalResults

`func (o *YieldAdjustmentsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *YieldAdjustmentsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *YieldAdjustmentsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *YieldAdjustmentsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetYieldAdjustment

`func (o *YieldAdjustmentsType) GetYieldAdjustment() []YieldInfoType`

GetYieldAdjustment returns the YieldAdjustment field if non-nil, zero value otherwise.

### GetYieldAdjustmentOk

`func (o *YieldAdjustmentsType) GetYieldAdjustmentOk() (*[]YieldInfoType, bool)`

GetYieldAdjustmentOk returns a tuple with the YieldAdjustment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAdjustment

`func (o *YieldAdjustmentsType) SetYieldAdjustment(v []YieldInfoType)`

SetYieldAdjustment sets YieldAdjustment field to given value.

### HasYieldAdjustment

`func (o *YieldAdjustmentsType) HasYieldAdjustment() bool`

HasYieldAdjustment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


