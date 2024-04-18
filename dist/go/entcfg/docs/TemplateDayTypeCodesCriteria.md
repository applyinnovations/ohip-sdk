# TemplateDayTypeCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateDayTypeCodes** | Pointer to [**[]TemplateDayTypeCodeType**](TemplateDayTypeCodeType.md) | Details for day type code at template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateDayTypeCodesCriteria

`func NewTemplateDayTypeCodesCriteria() *TemplateDayTypeCodesCriteria`

NewTemplateDayTypeCodesCriteria instantiates a new TemplateDayTypeCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDayTypeCodesCriteriaWithDefaults

`func NewTemplateDayTypeCodesCriteriaWithDefaults() *TemplateDayTypeCodesCriteria`

NewTemplateDayTypeCodesCriteriaWithDefaults instantiates a new TemplateDayTypeCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateDayTypeCodes

`func (o *TemplateDayTypeCodesCriteria) GetTemplateDayTypeCodes() []TemplateDayTypeCodeType`

GetTemplateDayTypeCodes returns the TemplateDayTypeCodes field if non-nil, zero value otherwise.

### GetTemplateDayTypeCodesOk

`func (o *TemplateDayTypeCodesCriteria) GetTemplateDayTypeCodesOk() (*[]TemplateDayTypeCodeType, bool)`

GetTemplateDayTypeCodesOk returns a tuple with the TemplateDayTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDayTypeCodes

`func (o *TemplateDayTypeCodesCriteria) SetTemplateDayTypeCodes(v []TemplateDayTypeCodeType)`

SetTemplateDayTypeCodes sets TemplateDayTypeCodes field to given value.

### HasTemplateDayTypeCodes

`func (o *TemplateDayTypeCodesCriteria) HasTemplateDayTypeCodes() bool`

HasTemplateDayTypeCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateDayTypeCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateDayTypeCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateDayTypeCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateDayTypeCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateDayTypeCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateDayTypeCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateDayTypeCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateDayTypeCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

