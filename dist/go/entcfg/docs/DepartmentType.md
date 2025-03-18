# DepartmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property Code where the department belongs to. | [optional] 
**DepartmentCode** | Pointer to **string** | Department Code. | [optional] 
**DepartmentName** | Pointer to [**TranslationTextType30**](TranslationTextType30.md) |  | [optional] 
**DisplaySequence** | Pointer to **int32** | Display Sequence for the department. | [optional] 
**Email** | Pointer to **string** | Department email address. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewDepartmentType

`func NewDepartmentType() *DepartmentType`

NewDepartmentType instantiates a new DepartmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepartmentTypeWithDefaults

`func NewDepartmentTypeWithDefaults() *DepartmentType`

NewDepartmentTypeWithDefaults instantiates a new DepartmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DepartmentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepartmentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepartmentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepartmentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetDepartmentCode

`func (o *DepartmentType) GetDepartmentCode() string`

GetDepartmentCode returns the DepartmentCode field if non-nil, zero value otherwise.

### GetDepartmentCodeOk

`func (o *DepartmentType) GetDepartmentCodeOk() (*string, bool)`

GetDepartmentCodeOk returns a tuple with the DepartmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentCode

`func (o *DepartmentType) SetDepartmentCode(v string)`

SetDepartmentCode sets DepartmentCode field to given value.

### HasDepartmentCode

`func (o *DepartmentType) HasDepartmentCode() bool`

HasDepartmentCode returns a boolean if a field has been set.

### GetDepartmentName

`func (o *DepartmentType) GetDepartmentName() TranslationTextType30`

GetDepartmentName returns the DepartmentName field if non-nil, zero value otherwise.

### GetDepartmentNameOk

`func (o *DepartmentType) GetDepartmentNameOk() (*TranslationTextType30, bool)`

GetDepartmentNameOk returns a tuple with the DepartmentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentName

`func (o *DepartmentType) SetDepartmentName(v TranslationTextType30)`

SetDepartmentName sets DepartmentName field to given value.

### HasDepartmentName

`func (o *DepartmentType) HasDepartmentName() bool`

HasDepartmentName returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *DepartmentType) GetDisplaySequence() int32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *DepartmentType) GetDisplaySequenceOk() (*int32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *DepartmentType) SetDisplaySequence(v int32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *DepartmentType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetEmail

`func (o *DepartmentType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *DepartmentType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *DepartmentType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *DepartmentType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetManagedBy

`func (o *DepartmentType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *DepartmentType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *DepartmentType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *DepartmentType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


