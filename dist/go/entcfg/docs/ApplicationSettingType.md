# ApplicationSettingType

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
**Settings** | Pointer to [**[]BaseApplicationSettingType**](BaseApplicationSettingType.md) |  | [optional] 
**LevelType** | Pointer to [**ApplicationSettingLevelType**](ApplicationSettingLevelType.md) |  | [optional] 
**LevelCode** | Pointer to **string** |  | [optional] 
**SubscriptionCountEligible** | Pointer to **bool** | Indicates if this OPERA Setting is part of subscription count. | [optional] 

## Methods

### NewApplicationSettingType

`func NewApplicationSettingType() *ApplicationSettingType`

NewApplicationSettingType instantiates a new ApplicationSettingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationSettingTypeWithDefaults

`func NewApplicationSettingTypeWithDefaults() *ApplicationSettingType`

NewApplicationSettingTypeWithDefaults instantiates a new ApplicationSettingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShortDescription

`func (o *ApplicationSettingType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *ApplicationSettingType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *ApplicationSettingType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *ApplicationSettingType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetDescription

`func (o *ApplicationSettingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApplicationSettingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApplicationSettingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ApplicationSettingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetWildCardMatch

`func (o *ApplicationSettingType) GetWildCardMatch() bool`

GetWildCardMatch returns the WildCardMatch field if non-nil, zero value otherwise.

### GetWildCardMatchOk

`func (o *ApplicationSettingType) GetWildCardMatchOk() (*bool, bool)`

GetWildCardMatchOk returns a tuple with the WildCardMatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWildCardMatch

`func (o *ApplicationSettingType) SetWildCardMatch(v bool)`

SetWildCardMatch sets WildCardMatch field to given value.

### HasWildCardMatch

`func (o *ApplicationSettingType) HasWildCardMatch() bool`

HasWildCardMatch returns a boolean if a field has been set.

### GetName

`func (o *ApplicationSettingType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApplicationSettingType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApplicationSettingType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApplicationSettingType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *ApplicationSettingType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ApplicationSettingType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ApplicationSettingType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ApplicationSettingType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetType

`func (o *ApplicationSettingType) GetType() ApplicationSettingTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApplicationSettingType) GetTypeOk() (*ApplicationSettingTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApplicationSettingType) SetType(v ApplicationSettingTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *ApplicationSettingType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetHotelId

`func (o *ApplicationSettingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ApplicationSettingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ApplicationSettingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ApplicationSettingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSequence

`func (o *ApplicationSettingType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ApplicationSettingType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ApplicationSettingType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ApplicationSettingType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetEditAllowed

`func (o *ApplicationSettingType) GetEditAllowed() bool`

GetEditAllowed returns the EditAllowed field if non-nil, zero value otherwise.

### GetEditAllowedOk

`func (o *ApplicationSettingType) GetEditAllowedOk() (*bool, bool)`

GetEditAllowedOk returns a tuple with the EditAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditAllowed

`func (o *ApplicationSettingType) SetEditAllowed(v bool)`

SetEditAllowed sets EditAllowed field to given value.

### HasEditAllowed

`func (o *ApplicationSettingType) HasEditAllowed() bool`

HasEditAllowed returns a boolean if a field has been set.

### GetValue

`func (o *ApplicationSettingType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApplicationSettingType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApplicationSettingType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApplicationSettingType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetScope

`func (o *ApplicationSettingType) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *ApplicationSettingType) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *ApplicationSettingType) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *ApplicationSettingType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetValueType

`func (o *ApplicationSettingType) GetValueType() string`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *ApplicationSettingType) GetValueTypeOk() (*string, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *ApplicationSettingType) SetValueType(v string)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *ApplicationSettingType) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetConversionType

`func (o *ApplicationSettingType) GetConversionType() ApplicationSettingConversionType`

GetConversionType returns the ConversionType field if non-nil, zero value otherwise.

### GetConversionTypeOk

`func (o *ApplicationSettingType) GetConversionTypeOk() (*ApplicationSettingConversionType, bool)`

GetConversionTypeOk returns a tuple with the ConversionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionType

`func (o *ApplicationSettingType) SetConversionType(v ApplicationSettingConversionType)`

SetConversionType sets ConversionType field to given value.

### HasConversionType

`func (o *ApplicationSettingType) HasConversionType() bool`

HasConversionType returns a boolean if a field has been set.

### GetSettings

`func (o *ApplicationSettingType) GetSettings() []BaseApplicationSettingType`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *ApplicationSettingType) GetSettingsOk() (*[]BaseApplicationSettingType, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *ApplicationSettingType) SetSettings(v []BaseApplicationSettingType)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *ApplicationSettingType) HasSettings() bool`

HasSettings returns a boolean if a field has been set.

### GetLevelType

`func (o *ApplicationSettingType) GetLevelType() ApplicationSettingLevelType`

GetLevelType returns the LevelType field if non-nil, zero value otherwise.

### GetLevelTypeOk

`func (o *ApplicationSettingType) GetLevelTypeOk() (*ApplicationSettingLevelType, bool)`

GetLevelTypeOk returns a tuple with the LevelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelType

`func (o *ApplicationSettingType) SetLevelType(v ApplicationSettingLevelType)`

SetLevelType sets LevelType field to given value.

### HasLevelType

`func (o *ApplicationSettingType) HasLevelType() bool`

HasLevelType returns a boolean if a field has been set.

### GetLevelCode

`func (o *ApplicationSettingType) GetLevelCode() string`

GetLevelCode returns the LevelCode field if non-nil, zero value otherwise.

### GetLevelCodeOk

`func (o *ApplicationSettingType) GetLevelCodeOk() (*string, bool)`

GetLevelCodeOk returns a tuple with the LevelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelCode

`func (o *ApplicationSettingType) SetLevelCode(v string)`

SetLevelCode sets LevelCode field to given value.

### HasLevelCode

`func (o *ApplicationSettingType) HasLevelCode() bool`

HasLevelCode returns a boolean if a field has been set.

### GetSubscriptionCountEligible

`func (o *ApplicationSettingType) GetSubscriptionCountEligible() bool`

GetSubscriptionCountEligible returns the SubscriptionCountEligible field if non-nil, zero value otherwise.

### GetSubscriptionCountEligibleOk

`func (o *ApplicationSettingType) GetSubscriptionCountEligibleOk() (*bool, bool)`

GetSubscriptionCountEligibleOk returns a tuple with the SubscriptionCountEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCountEligible

`func (o *ApplicationSettingType) SetSubscriptionCountEligible(v bool)`

SetSubscriptionCountEligible sets SubscriptionCountEligible field to given value.

### HasSubscriptionCountEligible

`func (o *ApplicationSettingType) HasSubscriptionCountEligible() bool`

HasSubscriptionCountEligible returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


