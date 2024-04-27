# RatePlanTypeNegotiatedRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**NegotiatedRate** | Pointer to [**[]NegotiatedRateType**](NegotiatedRateType.md) |  | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewRatePlanTypeNegotiatedRates

`func NewRatePlanTypeNegotiatedRates() *RatePlanTypeNegotiatedRates`

NewRatePlanTypeNegotiatedRates instantiates a new RatePlanTypeNegotiatedRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanTypeNegotiatedRatesWithDefaults

`func NewRatePlanTypeNegotiatedRatesWithDefaults() *RatePlanTypeNegotiatedRates`

NewRatePlanTypeNegotiatedRatesWithDefaults instantiates a new RatePlanTypeNegotiatedRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RatePlanTypeNegotiatedRates) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RatePlanTypeNegotiatedRates) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RatePlanTypeNegotiatedRates) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RatePlanTypeNegotiatedRates) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RatePlanTypeNegotiatedRates) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RatePlanTypeNegotiatedRates) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RatePlanTypeNegotiatedRates) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RatePlanTypeNegotiatedRates) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetNegotiatedRate

`func (o *RatePlanTypeNegotiatedRates) GetNegotiatedRate() []NegotiatedRateType`

GetNegotiatedRate returns the NegotiatedRate field if non-nil, zero value otherwise.

### GetNegotiatedRateOk

`func (o *RatePlanTypeNegotiatedRates) GetNegotiatedRateOk() (*[]NegotiatedRateType, bool)`

GetNegotiatedRateOk returns a tuple with the NegotiatedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRate

`func (o *RatePlanTypeNegotiatedRates) SetNegotiatedRate(v []NegotiatedRateType)`

SetNegotiatedRate sets NegotiatedRate field to given value.

### HasNegotiatedRate

`func (o *RatePlanTypeNegotiatedRates) HasNegotiatedRate() bool`

HasNegotiatedRate returns a boolean if a field has been set.

### GetTotalResults

`func (o *RatePlanTypeNegotiatedRates) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RatePlanTypeNegotiatedRates) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RatePlanTypeNegotiatedRates) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RatePlanTypeNegotiatedRates) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


