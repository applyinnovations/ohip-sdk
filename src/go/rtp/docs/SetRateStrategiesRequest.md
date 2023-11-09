# SetRateStrategiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RateStrategies** | Pointer to [**RateStrategiesToSetRateStrategies**](RateStrategiesToSetRateStrategies.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetRateStrategiesRequest

`func NewSetRateStrategiesRequest() *SetRateStrategiesRequest`

NewSetRateStrategiesRequest instantiates a new SetRateStrategiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetRateStrategiesRequestWithDefaults

`func NewSetRateStrategiesRequestWithDefaults() *SetRateStrategiesRequest`

NewSetRateStrategiesRequestWithDefaults instantiates a new SetRateStrategiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SetRateStrategiesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetRateStrategiesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetRateStrategiesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetRateStrategiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateStrategies

`func (o *SetRateStrategiesRequest) GetRateStrategies() RateStrategiesToSetRateStrategies`

GetRateStrategies returns the RateStrategies field if non-nil, zero value otherwise.

### GetRateStrategiesOk

`func (o *SetRateStrategiesRequest) GetRateStrategiesOk() (*RateStrategiesToSetRateStrategies, bool)`

GetRateStrategiesOk returns a tuple with the RateStrategies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategies

`func (o *SetRateStrategiesRequest) SetRateStrategies(v RateStrategiesToSetRateStrategies)`

SetRateStrategies sets RateStrategies field to given value.

### HasRateStrategies

`func (o *SetRateStrategiesRequest) HasRateStrategies() bool`

HasRateStrategies returns a boolean if a field has been set.

### GetWarnings

`func (o *SetRateStrategiesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetRateStrategiesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetRateStrategiesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetRateStrategiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


