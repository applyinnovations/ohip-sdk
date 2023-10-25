# ChangeTemplateGuaranteeCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateGuaranteeCode** | Pointer to [**GuaranteeConfigType**](GuaranteeConfigType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateGuaranteeCodeRequest

`func NewChangeTemplateGuaranteeCodeRequest() *ChangeTemplateGuaranteeCodeRequest`

NewChangeTemplateGuaranteeCodeRequest instantiates a new ChangeTemplateGuaranteeCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateGuaranteeCodeRequestWithDefaults

`func NewChangeTemplateGuaranteeCodeRequestWithDefaults() *ChangeTemplateGuaranteeCodeRequest`

NewChangeTemplateGuaranteeCodeRequestWithDefaults instantiates a new ChangeTemplateGuaranteeCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateGuaranteeCodeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateGuaranteeCodeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateGuaranteeCodeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateGuaranteeCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateGuaranteeCode

`func (o *ChangeTemplateGuaranteeCodeRequest) GetTemplateGuaranteeCode() GuaranteeConfigType`

GetTemplateGuaranteeCode returns the TemplateGuaranteeCode field if non-nil, zero value otherwise.

### GetTemplateGuaranteeCodeOk

`func (o *ChangeTemplateGuaranteeCodeRequest) GetTemplateGuaranteeCodeOk() (*GuaranteeConfigType, bool)`

GetTemplateGuaranteeCodeOk returns a tuple with the TemplateGuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateGuaranteeCode

`func (o *ChangeTemplateGuaranteeCodeRequest) SetTemplateGuaranteeCode(v GuaranteeConfigType)`

SetTemplateGuaranteeCode sets TemplateGuaranteeCode field to given value.

### HasTemplateGuaranteeCode

`func (o *ChangeTemplateGuaranteeCodeRequest) HasTemplateGuaranteeCode() bool`

HasTemplateGuaranteeCode returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateGuaranteeCodeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateGuaranteeCodeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateGuaranteeCodeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateGuaranteeCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


