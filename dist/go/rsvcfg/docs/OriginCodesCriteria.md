# OriginCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OriginCodes** | Pointer to [**[]OriginCodeType**](OriginCodeType.md) | List of Origin Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOriginCodesCriteria

`func NewOriginCodesCriteria() *OriginCodesCriteria`

NewOriginCodesCriteria instantiates a new OriginCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOriginCodesCriteriaWithDefaults

`func NewOriginCodesCriteriaWithDefaults() *OriginCodesCriteria`

NewOriginCodesCriteriaWithDefaults instantiates a new OriginCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOriginCodes

`func (o *OriginCodesCriteria) GetOriginCodes() []OriginCodeType`

GetOriginCodes returns the OriginCodes field if non-nil, zero value otherwise.

### GetOriginCodesOk

`func (o *OriginCodesCriteria) GetOriginCodesOk() (*[]OriginCodeType, bool)`

GetOriginCodesOk returns a tuple with the OriginCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCodes

`func (o *OriginCodesCriteria) SetOriginCodes(v []OriginCodeType)`

SetOriginCodes sets OriginCodes field to given value.

### HasOriginCodes

`func (o *OriginCodesCriteria) HasOriginCodes() bool`

HasOriginCodes returns a boolean if a field has been set.

### GetLinks

`func (o *OriginCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OriginCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OriginCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OriginCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OriginCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OriginCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OriginCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OriginCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


