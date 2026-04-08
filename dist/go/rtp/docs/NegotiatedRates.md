# NegotiatedRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NegotiatedRates** | Pointer to [**[]NegotiatedRateType**](NegotiatedRateType.md) | List of Negotiated rates to be maintained. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNegotiatedRates

`func NewNegotiatedRates() *NegotiatedRates`

NewNegotiatedRates instantiates a new NegotiatedRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegotiatedRatesWithDefaults

`func NewNegotiatedRatesWithDefaults() *NegotiatedRates`

NewNegotiatedRatesWithDefaults instantiates a new NegotiatedRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNegotiatedRates

`func (o *NegotiatedRates) GetNegotiatedRates() []NegotiatedRateType`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *NegotiatedRates) GetNegotiatedRatesOk() (*[]NegotiatedRateType, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *NegotiatedRates) SetNegotiatedRates(v []NegotiatedRateType)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *NegotiatedRates) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetLinks

`func (o *NegotiatedRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NegotiatedRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NegotiatedRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NegotiatedRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NegotiatedRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NegotiatedRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NegotiatedRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NegotiatedRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


