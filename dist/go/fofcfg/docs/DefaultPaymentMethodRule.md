# DefaultPaymentMethodRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Rule** | Pointer to [**PaymentMethodValidationRuleType**](PaymentMethodValidationRuleType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDefaultPaymentMethodRule

`func NewDefaultPaymentMethodRule() *DefaultPaymentMethodRule`

NewDefaultPaymentMethodRule instantiates a new DefaultPaymentMethodRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefaultPaymentMethodRuleWithDefaults

`func NewDefaultPaymentMethodRuleWithDefaults() *DefaultPaymentMethodRule`

NewDefaultPaymentMethodRuleWithDefaults instantiates a new DefaultPaymentMethodRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DefaultPaymentMethodRule) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DefaultPaymentMethodRule) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DefaultPaymentMethodRule) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DefaultPaymentMethodRule) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRule

`func (o *DefaultPaymentMethodRule) GetRule() PaymentMethodValidationRuleType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *DefaultPaymentMethodRule) GetRuleOk() (*PaymentMethodValidationRuleType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *DefaultPaymentMethodRule) SetRule(v PaymentMethodValidationRuleType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *DefaultPaymentMethodRule) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetWarnings

`func (o *DefaultPaymentMethodRule) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DefaultPaymentMethodRule) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DefaultPaymentMethodRule) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DefaultPaymentMethodRule) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


