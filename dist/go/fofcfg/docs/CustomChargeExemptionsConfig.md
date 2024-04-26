# CustomChargeExemptionsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomChargeExemptionsConfig** | Pointer to [**[]CustomChargeExemptionConfigType**](CustomChargeExemptionConfigType.md) | Holds Exemption details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCustomChargeExemptionsConfig

`func NewCustomChargeExemptionsConfig() *CustomChargeExemptionsConfig`

NewCustomChargeExemptionsConfig instantiates a new CustomChargeExemptionsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeExemptionsConfigWithDefaults

`func NewCustomChargeExemptionsConfigWithDefaults() *CustomChargeExemptionsConfig`

NewCustomChargeExemptionsConfigWithDefaults instantiates a new CustomChargeExemptionsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomChargeExemptionsConfig

`func (o *CustomChargeExemptionsConfig) GetCustomChargeExemptionsConfig() []CustomChargeExemptionConfigType`

GetCustomChargeExemptionsConfig returns the CustomChargeExemptionsConfig field if non-nil, zero value otherwise.

### GetCustomChargeExemptionsConfigOk

`func (o *CustomChargeExemptionsConfig) GetCustomChargeExemptionsConfigOk() (*[]CustomChargeExemptionConfigType, bool)`

GetCustomChargeExemptionsConfigOk returns a tuple with the CustomChargeExemptionsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionsConfig

`func (o *CustomChargeExemptionsConfig) SetCustomChargeExemptionsConfig(v []CustomChargeExemptionConfigType)`

SetCustomChargeExemptionsConfig sets CustomChargeExemptionsConfig field to given value.

### HasCustomChargeExemptionsConfig

`func (o *CustomChargeExemptionsConfig) HasCustomChargeExemptionsConfig() bool`

HasCustomChargeExemptionsConfig returns a boolean if a field has been set.

### GetLinks

`func (o *CustomChargeExemptionsConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CustomChargeExemptionsConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CustomChargeExemptionsConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CustomChargeExemptionsConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CustomChargeExemptionsConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CustomChargeExemptionsConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CustomChargeExemptionsConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CustomChargeExemptionsConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


