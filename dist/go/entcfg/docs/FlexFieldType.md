# FlexFieldType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Module** | Pointer to [**FlexFieldModuleType**](FlexFieldModuleType.md) |  | [optional] 
**Code** | Pointer to **string** | Flex field code | [optional] 
**FlexFieldId** | Pointer to **float32** | Unique ID of the flex field | [optional] 
**Description** | Pointer to **string** | Description of the flex field | [optional] 
**Sequence** | Pointer to **float32** | Sequence of the flex field | [optional] 
**LovName** | Pointer to **string** | Name of the flex field LOV | [optional] 
**IsMandatory** | Pointer to **bool** | Indicates whether the flex field is mandatory or not | [optional] 
**IsLov** | Pointer to **bool** | Indicates whether the flex field is a LOV or not | [optional] 
**IsMultiSelectLov** | Pointer to **bool** | Indicates whether the flex field is multi-select or not | [optional] 
**IsInactive** | Pointer to **bool** | Indicates whether the flex field is active or not | [optional] 
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**ProfileType** | Pointer to **string** | Profile Type | [optional] 

## Methods

### NewFlexFieldType

`func NewFlexFieldType() *FlexFieldType`

NewFlexFieldType instantiates a new FlexFieldType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFlexFieldTypeWithDefaults

`func NewFlexFieldTypeWithDefaults() *FlexFieldType`

NewFlexFieldTypeWithDefaults instantiates a new FlexFieldType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModule

`func (o *FlexFieldType) GetModule() FlexFieldModuleType`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *FlexFieldType) GetModuleOk() (*FlexFieldModuleType, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *FlexFieldType) SetModule(v FlexFieldModuleType)`

SetModule sets Module field to given value.

### HasModule

`func (o *FlexFieldType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetCode

`func (o *FlexFieldType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FlexFieldType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FlexFieldType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FlexFieldType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetFlexFieldId

`func (o *FlexFieldType) GetFlexFieldId() float32`

GetFlexFieldId returns the FlexFieldId field if non-nil, zero value otherwise.

### GetFlexFieldIdOk

`func (o *FlexFieldType) GetFlexFieldIdOk() (*float32, bool)`

GetFlexFieldIdOk returns a tuple with the FlexFieldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexFieldId

`func (o *FlexFieldType) SetFlexFieldId(v float32)`

SetFlexFieldId sets FlexFieldId field to given value.

### HasFlexFieldId

`func (o *FlexFieldType) HasFlexFieldId() bool`

HasFlexFieldId returns a boolean if a field has been set.

### GetDescription

`func (o *FlexFieldType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FlexFieldType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FlexFieldType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FlexFieldType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *FlexFieldType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *FlexFieldType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *FlexFieldType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *FlexFieldType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetLovName

`func (o *FlexFieldType) GetLovName() string`

GetLovName returns the LovName field if non-nil, zero value otherwise.

### GetLovNameOk

`func (o *FlexFieldType) GetLovNameOk() (*string, bool)`

GetLovNameOk returns a tuple with the LovName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovName

`func (o *FlexFieldType) SetLovName(v string)`

SetLovName sets LovName field to given value.

### HasLovName

`func (o *FlexFieldType) HasLovName() bool`

HasLovName returns a boolean if a field has been set.

### GetIsMandatory

`func (o *FlexFieldType) GetIsMandatory() bool`

GetIsMandatory returns the IsMandatory field if non-nil, zero value otherwise.

### GetIsMandatoryOk

`func (o *FlexFieldType) GetIsMandatoryOk() (*bool, bool)`

GetIsMandatoryOk returns a tuple with the IsMandatory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMandatory

`func (o *FlexFieldType) SetIsMandatory(v bool)`

SetIsMandatory sets IsMandatory field to given value.

### HasIsMandatory

`func (o *FlexFieldType) HasIsMandatory() bool`

HasIsMandatory returns a boolean if a field has been set.

### GetIsLov

`func (o *FlexFieldType) GetIsLov() bool`

GetIsLov returns the IsLov field if non-nil, zero value otherwise.

### GetIsLovOk

`func (o *FlexFieldType) GetIsLovOk() (*bool, bool)`

GetIsLovOk returns a tuple with the IsLov field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLov

`func (o *FlexFieldType) SetIsLov(v bool)`

SetIsLov sets IsLov field to given value.

### HasIsLov

`func (o *FlexFieldType) HasIsLov() bool`

HasIsLov returns a boolean if a field has been set.

### GetIsMultiSelectLov

`func (o *FlexFieldType) GetIsMultiSelectLov() bool`

GetIsMultiSelectLov returns the IsMultiSelectLov field if non-nil, zero value otherwise.

### GetIsMultiSelectLovOk

`func (o *FlexFieldType) GetIsMultiSelectLovOk() (*bool, bool)`

GetIsMultiSelectLovOk returns a tuple with the IsMultiSelectLov field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiSelectLov

`func (o *FlexFieldType) SetIsMultiSelectLov(v bool)`

SetIsMultiSelectLov sets IsMultiSelectLov field to given value.

### HasIsMultiSelectLov

`func (o *FlexFieldType) HasIsMultiSelectLov() bool`

HasIsMultiSelectLov returns a boolean if a field has been set.

### GetIsInactive

`func (o *FlexFieldType) GetIsInactive() bool`

GetIsInactive returns the IsInactive field if non-nil, zero value otherwise.

### GetIsInactiveOk

`func (o *FlexFieldType) GetIsInactiveOk() (*bool, bool)`

GetIsInactiveOk returns a tuple with the IsInactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsInactive

`func (o *FlexFieldType) SetIsInactive(v bool)`

SetIsInactive sets IsInactive field to given value.

### HasIsInactive

`func (o *FlexFieldType) HasIsInactive() bool`

HasIsInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *FlexFieldType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FlexFieldType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FlexFieldType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FlexFieldType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileType

`func (o *FlexFieldType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *FlexFieldType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *FlexFieldType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *FlexFieldType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


