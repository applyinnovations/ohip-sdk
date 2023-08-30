# TemplateFloorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Floor** | Pointer to **string** | Specifies the floor code. | [optional] 
**Description** | Pointer to **string** | Description for the floor. | [optional] 
**Housekeeping** | Pointer to **bool** | Flag to indicate if this floor should be available on the Task Sheet Workflow configuration. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the floor. | [optional] 
**Global** | Pointer to **bool** | Specifies whether the floor is to be available for selection at all hotels. | [optional] 

## Methods

### NewTemplateFloorType

`func NewTemplateFloorType() *TemplateFloorType`

NewTemplateFloorType instantiates a new TemplateFloorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateFloorTypeWithDefaults

`func NewTemplateFloorTypeWithDefaults() *TemplateFloorType`

NewTemplateFloorTypeWithDefaults instantiates a new TemplateFloorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFloor

`func (o *TemplateFloorType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *TemplateFloorType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *TemplateFloorType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *TemplateFloorType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateFloorType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateFloorType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateFloorType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateFloorType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHousekeeping

`func (o *TemplateFloorType) GetHousekeeping() bool`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *TemplateFloorType) GetHousekeepingOk() (*bool, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *TemplateFloorType) SetHousekeeping(v bool)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *TemplateFloorType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateFloorType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateFloorType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateFloorType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateFloorType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetGlobal

`func (o *TemplateFloorType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *TemplateFloorType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *TemplateFloorType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *TemplateFloorType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


