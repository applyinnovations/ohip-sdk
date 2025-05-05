# TemplateGuaranteeCodeToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateGuaranteeCode** | Pointer to [**GuaranteeConfigType**](GuaranteeConfigType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateGuaranteeCodeToBeChanged

`func NewTemplateGuaranteeCodeToBeChanged() *TemplateGuaranteeCodeToBeChanged`

NewTemplateGuaranteeCodeToBeChanged instantiates a new TemplateGuaranteeCodeToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateGuaranteeCodeToBeChangedWithDefaults

`func NewTemplateGuaranteeCodeToBeChangedWithDefaults() *TemplateGuaranteeCodeToBeChanged`

NewTemplateGuaranteeCodeToBeChangedWithDefaults instantiates a new TemplateGuaranteeCodeToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateGuaranteeCode

`func (o *TemplateGuaranteeCodeToBeChanged) GetTemplateGuaranteeCode() GuaranteeConfigType`

GetTemplateGuaranteeCode returns the TemplateGuaranteeCode field if non-nil, zero value otherwise.

### GetTemplateGuaranteeCodeOk

`func (o *TemplateGuaranteeCodeToBeChanged) GetTemplateGuaranteeCodeOk() (*GuaranteeConfigType, bool)`

GetTemplateGuaranteeCodeOk returns a tuple with the TemplateGuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateGuaranteeCode

`func (o *TemplateGuaranteeCodeToBeChanged) SetTemplateGuaranteeCode(v GuaranteeConfigType)`

SetTemplateGuaranteeCode sets TemplateGuaranteeCode field to given value.

### HasTemplateGuaranteeCode

`func (o *TemplateGuaranteeCodeToBeChanged) HasTemplateGuaranteeCode() bool`

HasTemplateGuaranteeCode returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateGuaranteeCodeToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateGuaranteeCodeToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateGuaranteeCodeToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateGuaranteeCodeToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateGuaranteeCodeToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateGuaranteeCodeToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateGuaranteeCodeToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateGuaranteeCodeToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


