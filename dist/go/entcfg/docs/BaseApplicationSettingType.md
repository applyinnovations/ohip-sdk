# BaseApplicationSettingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShortDescription** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**WildCardMatch** | Pointer to **bool** | A flag which indicate whether a wild card search should be made. | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**ApplicationSettingTypeType**](ApplicationSettingTypeType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Each configuration item will come with a HotelCode which will help the configuration to specify what context the update has to be. Eg. _Global,ORS,&#39;CRO&#39;, etc. | [optional] 
**Sequence** | Pointer to **float32** |  | [optional] 
**EditAllowed** | Pointer to **bool** |  | [optional] 
**Value** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **string** |  | [optional] 
**ValueType** | Pointer to **string** |  | [optional] 
**ConversionType** | Pointer to [**ApplicationSettingConversionType**](ApplicationSettingConversionType.md) |  | [optional] 

## Methods

### NewBaseApplicationSettingType

`func NewBaseApplicationSettingType() *BaseApplicationSettingType`

NewBaseApplicationSettingType instantiates a new BaseApplicationSettingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseApplicationSettingTypeWithDefaults

`func NewBaseApplicationSettingTypeWithDefaults() *BaseApplicationSettingType`

NewBaseApplicationSettingTypeWithDefaults instantiates a new BaseApplicationSettingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShortDescription

`func (o *BaseApplicationSettingType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *BaseApplicationSettingType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *BaseApplicationSettingType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *BaseApplicationSettingType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetDescription

`func (o *BaseApplicationSettingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BaseApplicationSettingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BaseApplicationSettingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BaseApplicationSettingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetWildCardMatch

`func (o *BaseApplicationSettingType) GetWildCardMatch() bool`

GetWildCardMatch returns the WildCardMatch field if non-nil, zero value otherwise.

### GetWildCardMatchOk

`func (o *BaseApplicationSettingType) GetWildCardMatchOk() (*bool, bool)`

GetWildCardMatchOk returns a tuple with the WildCardMatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWildCardMatch

`func (o *BaseApplicationSettingType) SetWildCardMatch(v bool)`

SetWildCardMatch sets WildCardMatch field to given value.

### HasWildCardMatch

`func (o *BaseApplicationSettingType) HasWildCardMatch() bool`

HasWildCardMatch returns a boolean if a field has been set.

### GetName

`func (o *BaseApplicationSettingType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseApplicationSettingType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseApplicationSettingType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseApplicationSettingType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *BaseApplicationSettingType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *BaseApplicationSettingType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *BaseApplicationSettingType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *BaseApplicationSettingType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetType

`func (o *BaseApplicationSettingType) GetType() ApplicationSettingTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BaseApplicationSettingType) GetTypeOk() (*ApplicationSettingTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BaseApplicationSettingType) SetType(v ApplicationSettingTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *BaseApplicationSettingType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetHotelId

`func (o *BaseApplicationSettingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BaseApplicationSettingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BaseApplicationSettingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BaseApplicationSettingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSequence

`func (o *BaseApplicationSettingType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *BaseApplicationSettingType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *BaseApplicationSettingType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *BaseApplicationSettingType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetEditAllowed

`func (o *BaseApplicationSettingType) GetEditAllowed() bool`

GetEditAllowed returns the EditAllowed field if non-nil, zero value otherwise.

### GetEditAllowedOk

`func (o *BaseApplicationSettingType) GetEditAllowedOk() (*bool, bool)`

GetEditAllowedOk returns a tuple with the EditAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditAllowed

`func (o *BaseApplicationSettingType) SetEditAllowed(v bool)`

SetEditAllowed sets EditAllowed field to given value.

### HasEditAllowed

`func (o *BaseApplicationSettingType) HasEditAllowed() bool`

HasEditAllowed returns a boolean if a field has been set.

### GetValue

`func (o *BaseApplicationSettingType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *BaseApplicationSettingType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *BaseApplicationSettingType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *BaseApplicationSettingType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetScope

`func (o *BaseApplicationSettingType) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *BaseApplicationSettingType) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *BaseApplicationSettingType) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *BaseApplicationSettingType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetValueType

`func (o *BaseApplicationSettingType) GetValueType() string`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *BaseApplicationSettingType) GetValueTypeOk() (*string, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *BaseApplicationSettingType) SetValueType(v string)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *BaseApplicationSettingType) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetConversionType

`func (o *BaseApplicationSettingType) GetConversionType() ApplicationSettingConversionType`

GetConversionType returns the ConversionType field if non-nil, zero value otherwise.

### GetConversionTypeOk

`func (o *BaseApplicationSettingType) GetConversionTypeOk() (*ApplicationSettingConversionType, bool)`

GetConversionTypeOk returns a tuple with the ConversionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionType

`func (o *BaseApplicationSettingType) SetConversionType(v ApplicationSettingConversionType)`

SetConversionType sets ConversionType field to given value.

### HasConversionType

`func (o *BaseApplicationSettingType) HasConversionType() bool`

HasConversionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


