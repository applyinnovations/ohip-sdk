# TranslationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Articles** | Pointer to [**[]InterfaceControlArticleType**](InterfaceControlArticleType.md) | Translation article setup of a hotel interface. | [optional] 
**Configuation** | Pointer to [**[]InterfaceControlCfgType**](InterfaceControlCfgType.md) | Translation configuration of a hotel interface. | [optional] 
**DefaultCharge** | Pointer to **int32** | Default charge of a translation setup. | [optional] 
**GroupNoLength** | Pointer to **string** | Group number length of a translation setup. | [optional] 
**GuestMessageIdLength** | Pointer to **string** | Guest message id length of a translation setup. | [optional] 
**GuestNoLength** | Pointer to **string** | Guest number length of a translation setup. | [optional] 
**Languages** | Pointer to [**[]InterfaceControlLangType**](InterfaceControlLangType.md) | Translation languages setup of a hotel interface. | [optional] 
**Specifications** | Pointer to [**[]InterfaceControlSpecType**](InterfaceControlSpecType.md) | Translation specifications setup of a hotel interface. | [optional] 

## Methods

### NewTranslationType

`func NewTranslationType() *TranslationType`

NewTranslationType instantiates a new TranslationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTranslationTypeWithDefaults

`func NewTranslationTypeWithDefaults() *TranslationType`

NewTranslationTypeWithDefaults instantiates a new TranslationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticles

`func (o *TranslationType) GetArticles() []InterfaceControlArticleType`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *TranslationType) GetArticlesOk() (*[]InterfaceControlArticleType, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *TranslationType) SetArticles(v []InterfaceControlArticleType)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *TranslationType) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetConfiguation

`func (o *TranslationType) GetConfiguation() []InterfaceControlCfgType`

GetConfiguation returns the Configuation field if non-nil, zero value otherwise.

### GetConfiguationOk

`func (o *TranslationType) GetConfiguationOk() (*[]InterfaceControlCfgType, bool)`

GetConfiguationOk returns a tuple with the Configuation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguation

`func (o *TranslationType) SetConfiguation(v []InterfaceControlCfgType)`

SetConfiguation sets Configuation field to given value.

### HasConfiguation

`func (o *TranslationType) HasConfiguation() bool`

HasConfiguation returns a boolean if a field has been set.

### GetDefaultCharge

`func (o *TranslationType) GetDefaultCharge() int32`

GetDefaultCharge returns the DefaultCharge field if non-nil, zero value otherwise.

### GetDefaultChargeOk

`func (o *TranslationType) GetDefaultChargeOk() (*int32, bool)`

GetDefaultChargeOk returns a tuple with the DefaultCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultCharge

`func (o *TranslationType) SetDefaultCharge(v int32)`

SetDefaultCharge sets DefaultCharge field to given value.

### HasDefaultCharge

`func (o *TranslationType) HasDefaultCharge() bool`

HasDefaultCharge returns a boolean if a field has been set.

### GetGroupNoLength

`func (o *TranslationType) GetGroupNoLength() string`

GetGroupNoLength returns the GroupNoLength field if non-nil, zero value otherwise.

### GetGroupNoLengthOk

`func (o *TranslationType) GetGroupNoLengthOk() (*string, bool)`

GetGroupNoLengthOk returns a tuple with the GroupNoLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupNoLength

`func (o *TranslationType) SetGroupNoLength(v string)`

SetGroupNoLength sets GroupNoLength field to given value.

### HasGroupNoLength

`func (o *TranslationType) HasGroupNoLength() bool`

HasGroupNoLength returns a boolean if a field has been set.

### GetGuestMessageIdLength

`func (o *TranslationType) GetGuestMessageIdLength() string`

GetGuestMessageIdLength returns the GuestMessageIdLength field if non-nil, zero value otherwise.

### GetGuestMessageIdLengthOk

`func (o *TranslationType) GetGuestMessageIdLengthOk() (*string, bool)`

GetGuestMessageIdLengthOk returns a tuple with the GuestMessageIdLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessageIdLength

`func (o *TranslationType) SetGuestMessageIdLength(v string)`

SetGuestMessageIdLength sets GuestMessageIdLength field to given value.

### HasGuestMessageIdLength

`func (o *TranslationType) HasGuestMessageIdLength() bool`

HasGuestMessageIdLength returns a boolean if a field has been set.

### GetGuestNoLength

`func (o *TranslationType) GetGuestNoLength() string`

GetGuestNoLength returns the GuestNoLength field if non-nil, zero value otherwise.

### GetGuestNoLengthOk

`func (o *TranslationType) GetGuestNoLengthOk() (*string, bool)`

GetGuestNoLengthOk returns a tuple with the GuestNoLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNoLength

`func (o *TranslationType) SetGuestNoLength(v string)`

SetGuestNoLength sets GuestNoLength field to given value.

### HasGuestNoLength

`func (o *TranslationType) HasGuestNoLength() bool`

HasGuestNoLength returns a boolean if a field has been set.

### GetLanguages

`func (o *TranslationType) GetLanguages() []InterfaceControlLangType`

GetLanguages returns the Languages field if non-nil, zero value otherwise.

### GetLanguagesOk

`func (o *TranslationType) GetLanguagesOk() (*[]InterfaceControlLangType, bool)`

GetLanguagesOk returns a tuple with the Languages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguages

`func (o *TranslationType) SetLanguages(v []InterfaceControlLangType)`

SetLanguages sets Languages field to given value.

### HasLanguages

`func (o *TranslationType) HasLanguages() bool`

HasLanguages returns a boolean if a field has been set.

### GetSpecifications

`func (o *TranslationType) GetSpecifications() []InterfaceControlSpecType`

GetSpecifications returns the Specifications field if non-nil, zero value otherwise.

### GetSpecificationsOk

`func (o *TranslationType) GetSpecificationsOk() (*[]InterfaceControlSpecType, bool)`

GetSpecificationsOk returns a tuple with the Specifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecifications

`func (o *TranslationType) SetSpecifications(v []InterfaceControlSpecType)`

SetSpecifications sets Specifications field to given value.

### HasSpecifications

`func (o *TranslationType) HasSpecifications() bool`

HasSpecifications returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


