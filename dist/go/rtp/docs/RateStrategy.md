# RateStrategy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateStrategy** | Pointer to [**HotelRateStrategyType**](HotelRateStrategyType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateStrategy

`func NewRateStrategy() *RateStrategy`

NewRateStrategy instantiates a new RateStrategy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateStrategyWithDefaults

`func NewRateStrategyWithDefaults() *RateStrategy`

NewRateStrategyWithDefaults instantiates a new RateStrategy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateStrategy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateStrategy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateStrategy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateStrategy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateStrategy

`func (o *RateStrategy) GetRateStrategy() HotelRateStrategyType`

GetRateStrategy returns the RateStrategy field if non-nil, zero value otherwise.

### GetRateStrategyOk

`func (o *RateStrategy) GetRateStrategyOk() (*HotelRateStrategyType, bool)`

GetRateStrategyOk returns a tuple with the RateStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategy

`func (o *RateStrategy) SetRateStrategy(v HotelRateStrategyType)`

SetRateStrategy sets RateStrategy field to given value.

### HasRateStrategy

`func (o *RateStrategy) HasRateStrategy() bool`

HasRateStrategy returns a boolean if a field has been set.

### GetWarnings

`func (o *RateStrategy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateStrategy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateStrategy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateStrategy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


