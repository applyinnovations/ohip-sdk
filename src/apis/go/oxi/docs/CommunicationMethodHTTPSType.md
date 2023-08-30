# CommunicationMethodHTTPSType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **string** | Attribute represents Username for Types HTTP | [optional] 
**Password** | Pointer to **string** | Attribute represents Password for Types HTTP | [optional] 
**SleepTime** | Pointer to **float32** | Attribute represents Idle Time(in Minutes) of HTTP,None | [optional] 
**TimeOut** | Pointer to **float32** | Attribute is used to indentify the TimeOut(in Seconds) of HTTP,None | [optional] 
**Address** | Pointer to **string** | Attribute represents Address | [optional] 
**ProxyAddress** | Pointer to **string** | Attribute that represents Proxy URL | [optional] 
**CompressData** | Pointer to **bool** | Attribute that indicates whether data to compressed or not | [optional] 
**UseClientCertificate** | Pointer to **bool** | Attribute that indicates whether to use client certificate or not | [optional] 
**System** | Pointer to [**SystemType**](SystemType.md) |  | [optional] 
**Locale** | Pointer to **string** | Locale(Holidex specific) Values like US,EU | [optional] 
**UseVaultProxy** | Pointer to **bool** | Attribute that indicates whether to use Proxy URL or User configured URL. | [optional] 
**AllowCompressData** | Pointer to **bool** | Attribute that indicates whether to allow compress data or not. | [optional] 

## Methods

### NewCommunicationMethodHTTPSType

`func NewCommunicationMethodHTTPSType() *CommunicationMethodHTTPSType`

NewCommunicationMethodHTTPSType instantiates a new CommunicationMethodHTTPSType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodHTTPSTypeWithDefaults

`func NewCommunicationMethodHTTPSTypeWithDefaults() *CommunicationMethodHTTPSType`

NewCommunicationMethodHTTPSTypeWithDefaults instantiates a new CommunicationMethodHTTPSType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *CommunicationMethodHTTPSType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *CommunicationMethodHTTPSType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *CommunicationMethodHTTPSType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *CommunicationMethodHTTPSType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetPassword

`func (o *CommunicationMethodHTTPSType) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *CommunicationMethodHTTPSType) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *CommunicationMethodHTTPSType) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *CommunicationMethodHTTPSType) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetSleepTime

`func (o *CommunicationMethodHTTPSType) GetSleepTime() float32`

GetSleepTime returns the SleepTime field if non-nil, zero value otherwise.

### GetSleepTimeOk

`func (o *CommunicationMethodHTTPSType) GetSleepTimeOk() (*float32, bool)`

GetSleepTimeOk returns a tuple with the SleepTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSleepTime

`func (o *CommunicationMethodHTTPSType) SetSleepTime(v float32)`

SetSleepTime sets SleepTime field to given value.

### HasSleepTime

`func (o *CommunicationMethodHTTPSType) HasSleepTime() bool`

HasSleepTime returns a boolean if a field has been set.

### GetTimeOut

`func (o *CommunicationMethodHTTPSType) GetTimeOut() float32`

GetTimeOut returns the TimeOut field if non-nil, zero value otherwise.

### GetTimeOutOk

`func (o *CommunicationMethodHTTPSType) GetTimeOutOk() (*float32, bool)`

GetTimeOutOk returns a tuple with the TimeOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeOut

`func (o *CommunicationMethodHTTPSType) SetTimeOut(v float32)`

SetTimeOut sets TimeOut field to given value.

### HasTimeOut

`func (o *CommunicationMethodHTTPSType) HasTimeOut() bool`

HasTimeOut returns a boolean if a field has been set.

### GetAddress

`func (o *CommunicationMethodHTTPSType) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CommunicationMethodHTTPSType) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CommunicationMethodHTTPSType) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *CommunicationMethodHTTPSType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetProxyAddress

`func (o *CommunicationMethodHTTPSType) GetProxyAddress() string`

GetProxyAddress returns the ProxyAddress field if non-nil, zero value otherwise.

### GetProxyAddressOk

`func (o *CommunicationMethodHTTPSType) GetProxyAddressOk() (*string, bool)`

GetProxyAddressOk returns a tuple with the ProxyAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProxyAddress

`func (o *CommunicationMethodHTTPSType) SetProxyAddress(v string)`

SetProxyAddress sets ProxyAddress field to given value.

### HasProxyAddress

`func (o *CommunicationMethodHTTPSType) HasProxyAddress() bool`

HasProxyAddress returns a boolean if a field has been set.

### GetCompressData

`func (o *CommunicationMethodHTTPSType) GetCompressData() bool`

GetCompressData returns the CompressData field if non-nil, zero value otherwise.

### GetCompressDataOk

`func (o *CommunicationMethodHTTPSType) GetCompressDataOk() (*bool, bool)`

GetCompressDataOk returns a tuple with the CompressData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressData

`func (o *CommunicationMethodHTTPSType) SetCompressData(v bool)`

SetCompressData sets CompressData field to given value.

### HasCompressData

`func (o *CommunicationMethodHTTPSType) HasCompressData() bool`

HasCompressData returns a boolean if a field has been set.

### GetUseClientCertificate

`func (o *CommunicationMethodHTTPSType) GetUseClientCertificate() bool`

GetUseClientCertificate returns the UseClientCertificate field if non-nil, zero value otherwise.

### GetUseClientCertificateOk

`func (o *CommunicationMethodHTTPSType) GetUseClientCertificateOk() (*bool, bool)`

GetUseClientCertificateOk returns a tuple with the UseClientCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseClientCertificate

`func (o *CommunicationMethodHTTPSType) SetUseClientCertificate(v bool)`

SetUseClientCertificate sets UseClientCertificate field to given value.

### HasUseClientCertificate

`func (o *CommunicationMethodHTTPSType) HasUseClientCertificate() bool`

HasUseClientCertificate returns a boolean if a field has been set.

### GetSystem

`func (o *CommunicationMethodHTTPSType) GetSystem() SystemType`

GetSystem returns the System field if non-nil, zero value otherwise.

### GetSystemOk

`func (o *CommunicationMethodHTTPSType) GetSystemOk() (*SystemType, bool)`

GetSystemOk returns a tuple with the System field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystem

`func (o *CommunicationMethodHTTPSType) SetSystem(v SystemType)`

SetSystem sets System field to given value.

### HasSystem

`func (o *CommunicationMethodHTTPSType) HasSystem() bool`

HasSystem returns a boolean if a field has been set.

### GetLocale

`func (o *CommunicationMethodHTTPSType) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *CommunicationMethodHTTPSType) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *CommunicationMethodHTTPSType) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *CommunicationMethodHTTPSType) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetUseVaultProxy

`func (o *CommunicationMethodHTTPSType) GetUseVaultProxy() bool`

GetUseVaultProxy returns the UseVaultProxy field if non-nil, zero value otherwise.

### GetUseVaultProxyOk

`func (o *CommunicationMethodHTTPSType) GetUseVaultProxyOk() (*bool, bool)`

GetUseVaultProxyOk returns a tuple with the UseVaultProxy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseVaultProxy

`func (o *CommunicationMethodHTTPSType) SetUseVaultProxy(v bool)`

SetUseVaultProxy sets UseVaultProxy field to given value.

### HasUseVaultProxy

`func (o *CommunicationMethodHTTPSType) HasUseVaultProxy() bool`

HasUseVaultProxy returns a boolean if a field has been set.

### GetAllowCompressData

`func (o *CommunicationMethodHTTPSType) GetAllowCompressData() bool`

GetAllowCompressData returns the AllowCompressData field if non-nil, zero value otherwise.

### GetAllowCompressDataOk

`func (o *CommunicationMethodHTTPSType) GetAllowCompressDataOk() (*bool, bool)`

GetAllowCompressDataOk returns a tuple with the AllowCompressData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCompressData

`func (o *CommunicationMethodHTTPSType) SetAllowCompressData(v bool)`

SetAllowCompressData sets AllowCompressData field to given value.

### HasAllowCompressData

`func (o *CommunicationMethodHTTPSType) HasAllowCompressData() bool`

HasAllowCompressData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


