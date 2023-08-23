# InterfaceControlType

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
**SubscriptionCountEligible** | Pointer to **bool** | Indicator if the function does not count against the OPERA Control function count limit or not | [optional] 
**Settings** | Pointer to [**[]BaseApplicationSettingType**](BaseApplicationSettingType.md) |  | [optional] 
**LevelType** | Pointer to [**ApplicationSettingLevelType**](ApplicationSettingLevelType.md) |  | [optional] 
**LevelCode** | Pointer to **string** |  | [optional] 
**InterfaceId** | Pointer to **string** | Identifier of the Interface. | [optional] 
**UseGlobal** | Pointer to **bool** | Flag indicating to use global inbound/outbound value for conversion code. | [optional] 
**OxiParameterGroup** | Pointer to **string** | V5 parameter group. | [optional] 

## Methods

### NewInterfaceControlType

`func NewInterfaceControlType() *InterfaceControlType`

NewInterfaceControlType instantiates a new InterfaceControlType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceControlTypeWithDefaults

`func NewInterfaceControlTypeWithDefaults() *InterfaceControlType`

NewInterfaceControlTypeWithDefaults instantiates a new InterfaceControlType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShortDescription

`func (o *InterfaceControlType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *InterfaceControlType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *InterfaceControlType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *InterfaceControlType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceControlType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceControlType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceControlType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceControlType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetWildCardMatch

`func (o *InterfaceControlType) GetWildCardMatch() bool`

GetWildCardMatch returns the WildCardMatch field if non-nil, zero value otherwise.

### GetWildCardMatchOk

`func (o *InterfaceControlType) GetWildCardMatchOk() (*bool, bool)`

GetWildCardMatchOk returns a tuple with the WildCardMatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWildCardMatch

`func (o *InterfaceControlType) SetWildCardMatch(v bool)`

SetWildCardMatch sets WildCardMatch field to given value.

### HasWildCardMatch

`func (o *InterfaceControlType) HasWildCardMatch() bool`

HasWildCardMatch returns a boolean if a field has been set.

### GetName

`func (o *InterfaceControlType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InterfaceControlType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InterfaceControlType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *InterfaceControlType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *InterfaceControlType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *InterfaceControlType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *InterfaceControlType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *InterfaceControlType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetType

`func (o *InterfaceControlType) GetType() ApplicationSettingTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InterfaceControlType) GetTypeOk() (*ApplicationSettingTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InterfaceControlType) SetType(v ApplicationSettingTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *InterfaceControlType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetHotelId

`func (o *InterfaceControlType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceControlType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceControlType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceControlType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSequence

`func (o *InterfaceControlType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *InterfaceControlType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *InterfaceControlType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *InterfaceControlType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetEditAllowed

`func (o *InterfaceControlType) GetEditAllowed() bool`

GetEditAllowed returns the EditAllowed field if non-nil, zero value otherwise.

### GetEditAllowedOk

`func (o *InterfaceControlType) GetEditAllowedOk() (*bool, bool)`

GetEditAllowedOk returns a tuple with the EditAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditAllowed

`func (o *InterfaceControlType) SetEditAllowed(v bool)`

SetEditAllowed sets EditAllowed field to given value.

### HasEditAllowed

`func (o *InterfaceControlType) HasEditAllowed() bool`

HasEditAllowed returns a boolean if a field has been set.

### GetValue

`func (o *InterfaceControlType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *InterfaceControlType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *InterfaceControlType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *InterfaceControlType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetScope

`func (o *InterfaceControlType) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *InterfaceControlType) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *InterfaceControlType) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *InterfaceControlType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetValueType

`func (o *InterfaceControlType) GetValueType() string`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *InterfaceControlType) GetValueTypeOk() (*string, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *InterfaceControlType) SetValueType(v string)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *InterfaceControlType) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetConversionType

`func (o *InterfaceControlType) GetConversionType() ApplicationSettingConversionType`

GetConversionType returns the ConversionType field if non-nil, zero value otherwise.

### GetConversionTypeOk

`func (o *InterfaceControlType) GetConversionTypeOk() (*ApplicationSettingConversionType, bool)`

GetConversionTypeOk returns a tuple with the ConversionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionType

`func (o *InterfaceControlType) SetConversionType(v ApplicationSettingConversionType)`

SetConversionType sets ConversionType field to given value.

### HasConversionType

`func (o *InterfaceControlType) HasConversionType() bool`

HasConversionType returns a boolean if a field has been set.

### GetSubscriptionCountEligible

`func (o *InterfaceControlType) GetSubscriptionCountEligible() bool`

GetSubscriptionCountEligible returns the SubscriptionCountEligible field if non-nil, zero value otherwise.

### GetSubscriptionCountEligibleOk

`func (o *InterfaceControlType) GetSubscriptionCountEligibleOk() (*bool, bool)`

GetSubscriptionCountEligibleOk returns a tuple with the SubscriptionCountEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionCountEligible

`func (o *InterfaceControlType) SetSubscriptionCountEligible(v bool)`

SetSubscriptionCountEligible sets SubscriptionCountEligible field to given value.

### HasSubscriptionCountEligible

`func (o *InterfaceControlType) HasSubscriptionCountEligible() bool`

HasSubscriptionCountEligible returns a boolean if a field has been set.

### GetSettings

`func (o *InterfaceControlType) GetSettings() []BaseApplicationSettingType`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *InterfaceControlType) GetSettingsOk() (*[]BaseApplicationSettingType, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *InterfaceControlType) SetSettings(v []BaseApplicationSettingType)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *InterfaceControlType) HasSettings() bool`

HasSettings returns a boolean if a field has been set.

### GetLevelType

`func (o *InterfaceControlType) GetLevelType() ApplicationSettingLevelType`

GetLevelType returns the LevelType field if non-nil, zero value otherwise.

### GetLevelTypeOk

`func (o *InterfaceControlType) GetLevelTypeOk() (*ApplicationSettingLevelType, bool)`

GetLevelTypeOk returns a tuple with the LevelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelType

`func (o *InterfaceControlType) SetLevelType(v ApplicationSettingLevelType)`

SetLevelType sets LevelType field to given value.

### HasLevelType

`func (o *InterfaceControlType) HasLevelType() bool`

HasLevelType returns a boolean if a field has been set.

### GetLevelCode

`func (o *InterfaceControlType) GetLevelCode() string`

GetLevelCode returns the LevelCode field if non-nil, zero value otherwise.

### GetLevelCodeOk

`func (o *InterfaceControlType) GetLevelCodeOk() (*string, bool)`

GetLevelCodeOk returns a tuple with the LevelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelCode

`func (o *InterfaceControlType) SetLevelCode(v string)`

SetLevelCode sets LevelCode field to given value.

### HasLevelCode

`func (o *InterfaceControlType) HasLevelCode() bool`

HasLevelCode returns a boolean if a field has been set.

### GetInterfaceId

`func (o *InterfaceControlType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *InterfaceControlType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *InterfaceControlType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *InterfaceControlType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetUseGlobal

`func (o *InterfaceControlType) GetUseGlobal() bool`

GetUseGlobal returns the UseGlobal field if non-nil, zero value otherwise.

### GetUseGlobalOk

`func (o *InterfaceControlType) GetUseGlobalOk() (*bool, bool)`

GetUseGlobalOk returns a tuple with the UseGlobal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseGlobal

`func (o *InterfaceControlType) SetUseGlobal(v bool)`

SetUseGlobal sets UseGlobal field to given value.

### HasUseGlobal

`func (o *InterfaceControlType) HasUseGlobal() bool`

HasUseGlobal returns a boolean if a field has been set.

### GetOxiParameterGroup

`func (o *InterfaceControlType) GetOxiParameterGroup() string`

GetOxiParameterGroup returns the OxiParameterGroup field if non-nil, zero value otherwise.

### GetOxiParameterGroupOk

`func (o *InterfaceControlType) GetOxiParameterGroupOk() (*string, bool)`

GetOxiParameterGroupOk returns a tuple with the OxiParameterGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOxiParameterGroup

`func (o *InterfaceControlType) SetOxiParameterGroup(v string)`

SetOxiParameterGroup sets OxiParameterGroup field to given value.

### HasOxiParameterGroup

`func (o *InterfaceControlType) HasOxiParameterGroup() bool`

HasOxiParameterGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


