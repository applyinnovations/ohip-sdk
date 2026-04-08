# TemplateOutOfOrderServiceReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateOutOfOrderServiceReasons** | Pointer to [**[]TemplateOutOfOrderServiceReasonType**](TemplateOutOfOrderServiceReasonType.md) | Template of out of order/service reason details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateOutOfOrderServiceReasonsCriteria

`func NewTemplateOutOfOrderServiceReasonsCriteria() *TemplateOutOfOrderServiceReasonsCriteria`

NewTemplateOutOfOrderServiceReasonsCriteria instantiates a new TemplateOutOfOrderServiceReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateOutOfOrderServiceReasonsCriteriaWithDefaults

`func NewTemplateOutOfOrderServiceReasonsCriteriaWithDefaults() *TemplateOutOfOrderServiceReasonsCriteria`

NewTemplateOutOfOrderServiceReasonsCriteriaWithDefaults instantiates a new TemplateOutOfOrderServiceReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateOutOfOrderServiceReasons

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetTemplateOutOfOrderServiceReasons() []TemplateOutOfOrderServiceReasonType`

GetTemplateOutOfOrderServiceReasons returns the TemplateOutOfOrderServiceReasons field if non-nil, zero value otherwise.

### GetTemplateOutOfOrderServiceReasonsOk

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetTemplateOutOfOrderServiceReasonsOk() (*[]TemplateOutOfOrderServiceReasonType, bool)`

GetTemplateOutOfOrderServiceReasonsOk returns a tuple with the TemplateOutOfOrderServiceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateOutOfOrderServiceReasons

`func (o *TemplateOutOfOrderServiceReasonsCriteria) SetTemplateOutOfOrderServiceReasons(v []TemplateOutOfOrderServiceReasonType)`

SetTemplateOutOfOrderServiceReasons sets TemplateOutOfOrderServiceReasons field to given value.

### HasTemplateOutOfOrderServiceReasons

`func (o *TemplateOutOfOrderServiceReasonsCriteria) HasTemplateOutOfOrderServiceReasons() bool`

HasTemplateOutOfOrderServiceReasons returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateOutOfOrderServiceReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateOutOfOrderServiceReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateOutOfOrderServiceReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateOutOfOrderServiceReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateOutOfOrderServiceReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


