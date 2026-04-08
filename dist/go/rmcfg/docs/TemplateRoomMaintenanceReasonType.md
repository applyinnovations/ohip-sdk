# TemplateRoomMaintenanceReasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Identification code for a particular room maintenance reason. | [optional] 
**Description** | Pointer to **string** | Description of a particular room maintenance reason. | [optional] 
**SellSequence** | Pointer to **float32** | Indicates the sell sequence for a particular room maintenance reason. | [optional] 
**Inactive** | Pointer to **bool** | Inactive flag for a particular room maintenance reason. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewTemplateRoomMaintenanceReasonType

`func NewTemplateRoomMaintenanceReasonType() *TemplateRoomMaintenanceReasonType`

NewTemplateRoomMaintenanceReasonType instantiates a new TemplateRoomMaintenanceReasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRoomMaintenanceReasonTypeWithDefaults

`func NewTemplateRoomMaintenanceReasonTypeWithDefaults() *TemplateRoomMaintenanceReasonType`

NewTemplateRoomMaintenanceReasonTypeWithDefaults instantiates a new TemplateRoomMaintenanceReasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TemplateRoomMaintenanceReasonType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateRoomMaintenanceReasonType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateRoomMaintenanceReasonType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateRoomMaintenanceReasonType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateRoomMaintenanceReasonType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateRoomMaintenanceReasonType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateRoomMaintenanceReasonType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateRoomMaintenanceReasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSellSequence

`func (o *TemplateRoomMaintenanceReasonType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *TemplateRoomMaintenanceReasonType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *TemplateRoomMaintenanceReasonType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *TemplateRoomMaintenanceReasonType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateRoomMaintenanceReasonType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateRoomMaintenanceReasonType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateRoomMaintenanceReasonType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateRoomMaintenanceReasonType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetManagedBy

`func (o *TemplateRoomMaintenanceReasonType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *TemplateRoomMaintenanceReasonType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *TemplateRoomMaintenanceReasonType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *TemplateRoomMaintenanceReasonType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


