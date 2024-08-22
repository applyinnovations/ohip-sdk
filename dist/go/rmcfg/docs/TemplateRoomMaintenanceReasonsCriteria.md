# TemplateRoomMaintenanceReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRoomMaintenanceReasons** | Pointer to [**[]TemplateRoomMaintenanceReasonType**](TemplateRoomMaintenanceReasonType.md) | Details for room maintenance reason at template level. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateRoomMaintenanceReasonsCriteria

`func NewTemplateRoomMaintenanceReasonsCriteria() *TemplateRoomMaintenanceReasonsCriteria`

NewTemplateRoomMaintenanceReasonsCriteria instantiates a new TemplateRoomMaintenanceReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRoomMaintenanceReasonsCriteriaWithDefaults

`func NewTemplateRoomMaintenanceReasonsCriteriaWithDefaults() *TemplateRoomMaintenanceReasonsCriteria`

NewTemplateRoomMaintenanceReasonsCriteriaWithDefaults instantiates a new TemplateRoomMaintenanceReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateRoomMaintenanceReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateRoomMaintenanceReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRoomMaintenanceReasons

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetTemplateRoomMaintenanceReasons() []TemplateRoomMaintenanceReasonType`

GetTemplateRoomMaintenanceReasons returns the TemplateRoomMaintenanceReasons field if non-nil, zero value otherwise.

### GetTemplateRoomMaintenanceReasonsOk

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetTemplateRoomMaintenanceReasonsOk() (*[]TemplateRoomMaintenanceReasonType, bool)`

GetTemplateRoomMaintenanceReasonsOk returns a tuple with the TemplateRoomMaintenanceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRoomMaintenanceReasons

`func (o *TemplateRoomMaintenanceReasonsCriteria) SetTemplateRoomMaintenanceReasons(v []TemplateRoomMaintenanceReasonType)`

SetTemplateRoomMaintenanceReasons sets TemplateRoomMaintenanceReasons field to given value.

### HasTemplateRoomMaintenanceReasons

`func (o *TemplateRoomMaintenanceReasonsCriteria) HasTemplateRoomMaintenanceReasons() bool`

HasTemplateRoomMaintenanceReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateRoomMaintenanceReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateRoomMaintenanceReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateRoomMaintenanceReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


