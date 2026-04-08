# SupportedExternalDeviceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeviceType** | Pointer to [**DeviceType**](DeviceType.md) |  | [optional] 
**DeviceCode** | Pointer to [**DeviceCode**](DeviceCode.md) |  | [optional] 
**DeviceArea** | Pointer to **string** | The area where the device is installed | [optional] 
**DisplayName** | Pointer to **string** | External device display name. | [optional] 
**MobileYN** | Pointer to **bool** | Indicator if device type is mobile or desktop. | [optional] 
**DesktopYN** | Pointer to **bool** | Indicator if device type is mobile or desktop. | [optional] 
**RegisterAddress** | Pointer to **string** | The address which the Cash Register ID ( Device ID ) is associated with. | [optional] 
**DeviceValue** | Pointer to **string** | External device Value. | [optional] 
**FiscalPartnerCode** | Pointer to **string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Primary** | Pointer to **bool** | Flag to designate the primary Fiscal Terminal. | [optional] 
**Active** | Pointer to **bool** | Flag that indicates whether the device is active. | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Label** | Pointer to **string** |  | [optional] 
**TranslatableLabel** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**IDEditable** | Pointer to **bool** |  | [optional] 

## Methods

### NewSupportedExternalDeviceType

`func NewSupportedExternalDeviceType() *SupportedExternalDeviceType`

NewSupportedExternalDeviceType instantiates a new SupportedExternalDeviceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSupportedExternalDeviceTypeWithDefaults

`func NewSupportedExternalDeviceTypeWithDefaults() *SupportedExternalDeviceType`

NewSupportedExternalDeviceTypeWithDefaults instantiates a new SupportedExternalDeviceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeviceType

`func (o *SupportedExternalDeviceType) GetDeviceType() DeviceType`

GetDeviceType returns the DeviceType field if non-nil, zero value otherwise.

### GetDeviceTypeOk

`func (o *SupportedExternalDeviceType) GetDeviceTypeOk() (*DeviceType, bool)`

GetDeviceTypeOk returns a tuple with the DeviceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceType

`func (o *SupportedExternalDeviceType) SetDeviceType(v DeviceType)`

SetDeviceType sets DeviceType field to given value.

### HasDeviceType

`func (o *SupportedExternalDeviceType) HasDeviceType() bool`

HasDeviceType returns a boolean if a field has been set.

### GetDeviceCode

`func (o *SupportedExternalDeviceType) GetDeviceCode() DeviceCode`

GetDeviceCode returns the DeviceCode field if non-nil, zero value otherwise.

### GetDeviceCodeOk

`func (o *SupportedExternalDeviceType) GetDeviceCodeOk() (*DeviceCode, bool)`

GetDeviceCodeOk returns a tuple with the DeviceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceCode

`func (o *SupportedExternalDeviceType) SetDeviceCode(v DeviceCode)`

SetDeviceCode sets DeviceCode field to given value.

### HasDeviceCode

`func (o *SupportedExternalDeviceType) HasDeviceCode() bool`

HasDeviceCode returns a boolean if a field has been set.

### GetDeviceArea

`func (o *SupportedExternalDeviceType) GetDeviceArea() string`

GetDeviceArea returns the DeviceArea field if non-nil, zero value otherwise.

### GetDeviceAreaOk

`func (o *SupportedExternalDeviceType) GetDeviceAreaOk() (*string, bool)`

GetDeviceAreaOk returns a tuple with the DeviceArea field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceArea

`func (o *SupportedExternalDeviceType) SetDeviceArea(v string)`

SetDeviceArea sets DeviceArea field to given value.

### HasDeviceArea

`func (o *SupportedExternalDeviceType) HasDeviceArea() bool`

HasDeviceArea returns a boolean if a field has been set.

### GetDisplayName

`func (o *SupportedExternalDeviceType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SupportedExternalDeviceType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SupportedExternalDeviceType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *SupportedExternalDeviceType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetMobileYN

`func (o *SupportedExternalDeviceType) GetMobileYN() bool`

GetMobileYN returns the MobileYN field if non-nil, zero value otherwise.

### GetMobileYNOk

`func (o *SupportedExternalDeviceType) GetMobileYNOk() (*bool, bool)`

GetMobileYNOk returns a tuple with the MobileYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileYN

`func (o *SupportedExternalDeviceType) SetMobileYN(v bool)`

SetMobileYN sets MobileYN field to given value.

### HasMobileYN

`func (o *SupportedExternalDeviceType) HasMobileYN() bool`

HasMobileYN returns a boolean if a field has been set.

### GetDesktopYN

`func (o *SupportedExternalDeviceType) GetDesktopYN() bool`

GetDesktopYN returns the DesktopYN field if non-nil, zero value otherwise.

### GetDesktopYNOk

`func (o *SupportedExternalDeviceType) GetDesktopYNOk() (*bool, bool)`

GetDesktopYNOk returns a tuple with the DesktopYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDesktopYN

`func (o *SupportedExternalDeviceType) SetDesktopYN(v bool)`

SetDesktopYN sets DesktopYN field to given value.

### HasDesktopYN

`func (o *SupportedExternalDeviceType) HasDesktopYN() bool`

HasDesktopYN returns a boolean if a field has been set.

### GetRegisterAddress

`func (o *SupportedExternalDeviceType) GetRegisterAddress() string`

GetRegisterAddress returns the RegisterAddress field if non-nil, zero value otherwise.

### GetRegisterAddressOk

`func (o *SupportedExternalDeviceType) GetRegisterAddressOk() (*string, bool)`

GetRegisterAddressOk returns a tuple with the RegisterAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisterAddress

`func (o *SupportedExternalDeviceType) SetRegisterAddress(v string)`

SetRegisterAddress sets RegisterAddress field to given value.

### HasRegisterAddress

`func (o *SupportedExternalDeviceType) HasRegisterAddress() bool`

HasRegisterAddress returns a boolean if a field has been set.

### GetDeviceValue

`func (o *SupportedExternalDeviceType) GetDeviceValue() string`

GetDeviceValue returns the DeviceValue field if non-nil, zero value otherwise.

### GetDeviceValueOk

`func (o *SupportedExternalDeviceType) GetDeviceValueOk() (*string, bool)`

GetDeviceValueOk returns a tuple with the DeviceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceValue

`func (o *SupportedExternalDeviceType) SetDeviceValue(v string)`

SetDeviceValue sets DeviceValue field to given value.

### HasDeviceValue

`func (o *SupportedExternalDeviceType) HasDeviceValue() bool`

HasDeviceValue returns a boolean if a field has been set.

### GetFiscalPartnerCode

`func (o *SupportedExternalDeviceType) GetFiscalPartnerCode() string`

GetFiscalPartnerCode returns the FiscalPartnerCode field if non-nil, zero value otherwise.

### GetFiscalPartnerCodeOk

`func (o *SupportedExternalDeviceType) GetFiscalPartnerCodeOk() (*string, bool)`

GetFiscalPartnerCodeOk returns a tuple with the FiscalPartnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartnerCode

`func (o *SupportedExternalDeviceType) SetFiscalPartnerCode(v string)`

SetFiscalPartnerCode sets FiscalPartnerCode field to given value.

### HasFiscalPartnerCode

`func (o *SupportedExternalDeviceType) HasFiscalPartnerCode() bool`

HasFiscalPartnerCode returns a boolean if a field has been set.

### GetPrimary

`func (o *SupportedExternalDeviceType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *SupportedExternalDeviceType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *SupportedExternalDeviceType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *SupportedExternalDeviceType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetActive

`func (o *SupportedExternalDeviceType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SupportedExternalDeviceType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SupportedExternalDeviceType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SupportedExternalDeviceType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetId

`func (o *SupportedExternalDeviceType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SupportedExternalDeviceType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SupportedExternalDeviceType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SupportedExternalDeviceType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *SupportedExternalDeviceType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *SupportedExternalDeviceType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *SupportedExternalDeviceType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *SupportedExternalDeviceType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetTranslatableLabel

`func (o *SupportedExternalDeviceType) GetTranslatableLabel() TranslationTextType2000`

GetTranslatableLabel returns the TranslatableLabel field if non-nil, zero value otherwise.

### GetTranslatableLabelOk

`func (o *SupportedExternalDeviceType) GetTranslatableLabelOk() (*TranslationTextType2000, bool)`

GetTranslatableLabelOk returns a tuple with the TranslatableLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableLabel

`func (o *SupportedExternalDeviceType) SetTranslatableLabel(v TranslationTextType2000)`

SetTranslatableLabel sets TranslatableLabel field to given value.

### HasTranslatableLabel

`func (o *SupportedExternalDeviceType) HasTranslatableLabel() bool`

HasTranslatableLabel returns a boolean if a field has been set.

### GetIDEditable

`func (o *SupportedExternalDeviceType) GetIDEditable() bool`

GetIDEditable returns the IDEditable field if non-nil, zero value otherwise.

### GetIDEditableOk

`func (o *SupportedExternalDeviceType) GetIDEditableOk() (*bool, bool)`

GetIDEditableOk returns a tuple with the IDEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIDEditable

`func (o *SupportedExternalDeviceType) SetIDEditable(v bool)`

SetIDEditable sets IDEditable field to given value.

### HasIDEditable

`func (o *SupportedExternalDeviceType) HasIDEditable() bool`

HasIDEditable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


