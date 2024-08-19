# PropertyPromotionCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PropertyPromotionCode** | Pointer to [**PropertyPromotionCodeType**](PropertyPromotionCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPropertyPromotionCode

`func NewPropertyPromotionCode() *PropertyPromotionCode`

NewPropertyPromotionCode instantiates a new PropertyPromotionCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyPromotionCodeWithDefaults

`func NewPropertyPromotionCodeWithDefaults() *PropertyPromotionCode`

NewPropertyPromotionCodeWithDefaults instantiates a new PropertyPromotionCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PropertyPromotionCode) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PropertyPromotionCode) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PropertyPromotionCode) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PropertyPromotionCode) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPropertyPromotionCode

`func (o *PropertyPromotionCode) GetPropertyPromotionCode() PropertyPromotionCodeType`

GetPropertyPromotionCode returns the PropertyPromotionCode field if non-nil, zero value otherwise.

### GetPropertyPromotionCodeOk

`func (o *PropertyPromotionCode) GetPropertyPromotionCodeOk() (*PropertyPromotionCodeType, bool)`

GetPropertyPromotionCodeOk returns a tuple with the PropertyPromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyPromotionCode

`func (o *PropertyPromotionCode) SetPropertyPromotionCode(v PropertyPromotionCodeType)`

SetPropertyPromotionCode sets PropertyPromotionCode field to given value.

### HasPropertyPromotionCode

`func (o *PropertyPromotionCode) HasPropertyPromotionCode() bool`

HasPropertyPromotionCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PropertyPromotionCode) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PropertyPromotionCode) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PropertyPromotionCode) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PropertyPromotionCode) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


