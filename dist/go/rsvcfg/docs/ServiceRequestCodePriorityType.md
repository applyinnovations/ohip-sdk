# ServiceRequestCodePriorityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**HotelId** | Pointer to **string** | Hotel of the record. | [optional] 

## Methods

### NewServiceRequestCodePriorityType

`func NewServiceRequestCodePriorityType() *ServiceRequestCodePriorityType`

NewServiceRequestCodePriorityType instantiates a new ServiceRequestCodePriorityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodePriorityTypeWithDefaults

`func NewServiceRequestCodePriorityTypeWithDefaults() *ServiceRequestCodePriorityType`

NewServiceRequestCodePriorityTypeWithDefaults instantiates a new ServiceRequestCodePriorityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ServiceRequestCodePriorityType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ServiceRequestCodePriorityType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ServiceRequestCodePriorityType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ServiceRequestCodePriorityType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ServiceRequestCodePriorityType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceRequestCodePriorityType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceRequestCodePriorityType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ServiceRequestCodePriorityType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *ServiceRequestCodePriorityType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *ServiceRequestCodePriorityType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *ServiceRequestCodePriorityType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *ServiceRequestCodePriorityType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetHotelId

`func (o *ServiceRequestCodePriorityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ServiceRequestCodePriorityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ServiceRequestCodePriorityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ServiceRequestCodePriorityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


