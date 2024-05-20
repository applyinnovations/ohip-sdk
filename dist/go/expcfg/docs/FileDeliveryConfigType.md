# FileDeliveryConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationType** | Pointer to [**FileDeliveryCommunicationType**](FileDeliveryCommunicationType.md) |  | [optional] 
**CompressFile** | Pointer to **bool** | Whether to compress the file before delivery. | [optional] 
**DeliveryStatus** | Pointer to **string** | Status of the last delivery. | [optional] 
**DeliveryTime** | Pointer to **string** | Time of day at which the file will be attempted to deliver, if desired. | [optional] 
**Directory** | Pointer to **string** | Directory to which the file is delivered while using FTP or FILE_SYSTEM. | [optional] 
**EnableSafeCreate** | Pointer to **bool** | Whether to create a temporary file and move it to actual file once entire data is written to the file (to prevent consumers from reading incomplete files). | [optional] 
**HostURL** | Pointer to **string** | Host address for FTP or URL for HTTP. | [optional] 
**Password** | Pointer to **string** | Password to authenticate while connecting through FTP or HTTP. | [optional] 
**RetryCount** | Pointer to **float32** | Number of delivery attempts to be made each day, in case of failures. | [optional] 
**RetryInterval** | Pointer to **float32** | Number of seconds to wait between delivery attempts in case of failures. | [optional] 
**SOAPAction** | Pointer to **string** | For SOAP version 1.1, value of SOAPAction to be passed. | [optional] 
**SOAPVersion** | Pointer to **string** | Version of SOAP protocol to use. | [optional] 
**TempDirectory** | Pointer to **string** | In safe create mode, original directory where the file should be created. | [optional] 
**UseAsciiTransfer** | Pointer to **bool** | Whether to transfer the file in ASCII or binary mode. | [optional] 
**UseSOAPProtocol** | Pointer to **bool** | Whether to deliver the file using SOAP protocol. | [optional] 
**UserId** | Pointer to **string** | User id to authenticate while connecting through FTP or HTTP. | [optional] 
**ValidAuthentication** | Pointer to **bool** | Indicates if the authentication information in this configuration is valid. | [optional] 
**ValidUpdateDate** | Pointer to **string** | Date and time when the last validation of connection information was performed. | [optional] 

## Methods

### NewFileDeliveryConfigType

`func NewFileDeliveryConfigType() *FileDeliveryConfigType`

NewFileDeliveryConfigType instantiates a new FileDeliveryConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileDeliveryConfigTypeWithDefaults

`func NewFileDeliveryConfigTypeWithDefaults() *FileDeliveryConfigType`

NewFileDeliveryConfigTypeWithDefaults instantiates a new FileDeliveryConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationType

`func (o *FileDeliveryConfigType) GetCommunicationType() FileDeliveryCommunicationType`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *FileDeliveryConfigType) GetCommunicationTypeOk() (*FileDeliveryCommunicationType, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *FileDeliveryConfigType) SetCommunicationType(v FileDeliveryCommunicationType)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *FileDeliveryConfigType) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetCompressFile

`func (o *FileDeliveryConfigType) GetCompressFile() bool`

GetCompressFile returns the CompressFile field if non-nil, zero value otherwise.

### GetCompressFileOk

`func (o *FileDeliveryConfigType) GetCompressFileOk() (*bool, bool)`

GetCompressFileOk returns a tuple with the CompressFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressFile

`func (o *FileDeliveryConfigType) SetCompressFile(v bool)`

SetCompressFile sets CompressFile field to given value.

### HasCompressFile

`func (o *FileDeliveryConfigType) HasCompressFile() bool`

HasCompressFile returns a boolean if a field has been set.

### GetDeliveryStatus

`func (o *FileDeliveryConfigType) GetDeliveryStatus() string`

GetDeliveryStatus returns the DeliveryStatus field if non-nil, zero value otherwise.

### GetDeliveryStatusOk

`func (o *FileDeliveryConfigType) GetDeliveryStatusOk() (*string, bool)`

GetDeliveryStatusOk returns a tuple with the DeliveryStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryStatus

`func (o *FileDeliveryConfigType) SetDeliveryStatus(v string)`

SetDeliveryStatus sets DeliveryStatus field to given value.

### HasDeliveryStatus

`func (o *FileDeliveryConfigType) HasDeliveryStatus() bool`

HasDeliveryStatus returns a boolean if a field has been set.

### GetDeliveryTime

`func (o *FileDeliveryConfigType) GetDeliveryTime() string`

GetDeliveryTime returns the DeliveryTime field if non-nil, zero value otherwise.

### GetDeliveryTimeOk

`func (o *FileDeliveryConfigType) GetDeliveryTimeOk() (*string, bool)`

GetDeliveryTimeOk returns a tuple with the DeliveryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryTime

`func (o *FileDeliveryConfigType) SetDeliveryTime(v string)`

SetDeliveryTime sets DeliveryTime field to given value.

### HasDeliveryTime

`func (o *FileDeliveryConfigType) HasDeliveryTime() bool`

HasDeliveryTime returns a boolean if a field has been set.

### GetDirectory

`func (o *FileDeliveryConfigType) GetDirectory() string`

GetDirectory returns the Directory field if non-nil, zero value otherwise.

### GetDirectoryOk

`func (o *FileDeliveryConfigType) GetDirectoryOk() (*string, bool)`

GetDirectoryOk returns a tuple with the Directory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectory

`func (o *FileDeliveryConfigType) SetDirectory(v string)`

SetDirectory sets Directory field to given value.

### HasDirectory

`func (o *FileDeliveryConfigType) HasDirectory() bool`

HasDirectory returns a boolean if a field has been set.

### GetEnableSafeCreate

`func (o *FileDeliveryConfigType) GetEnableSafeCreate() bool`

GetEnableSafeCreate returns the EnableSafeCreate field if non-nil, zero value otherwise.

### GetEnableSafeCreateOk

`func (o *FileDeliveryConfigType) GetEnableSafeCreateOk() (*bool, bool)`

GetEnableSafeCreateOk returns a tuple with the EnableSafeCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableSafeCreate

`func (o *FileDeliveryConfigType) SetEnableSafeCreate(v bool)`

SetEnableSafeCreate sets EnableSafeCreate field to given value.

### HasEnableSafeCreate

`func (o *FileDeliveryConfigType) HasEnableSafeCreate() bool`

HasEnableSafeCreate returns a boolean if a field has been set.

### GetHostURL

`func (o *FileDeliveryConfigType) GetHostURL() string`

GetHostURL returns the HostURL field if non-nil, zero value otherwise.

### GetHostURLOk

`func (o *FileDeliveryConfigType) GetHostURLOk() (*string, bool)`

GetHostURLOk returns a tuple with the HostURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostURL

`func (o *FileDeliveryConfigType) SetHostURL(v string)`

SetHostURL sets HostURL field to given value.

### HasHostURL

`func (o *FileDeliveryConfigType) HasHostURL() bool`

HasHostURL returns a boolean if a field has been set.

### GetPassword

`func (o *FileDeliveryConfigType) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *FileDeliveryConfigType) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *FileDeliveryConfigType) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *FileDeliveryConfigType) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetRetryCount

`func (o *FileDeliveryConfigType) GetRetryCount() float32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *FileDeliveryConfigType) GetRetryCountOk() (*float32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *FileDeliveryConfigType) SetRetryCount(v float32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *FileDeliveryConfigType) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetRetryInterval

`func (o *FileDeliveryConfigType) GetRetryInterval() float32`

GetRetryInterval returns the RetryInterval field if non-nil, zero value otherwise.

### GetRetryIntervalOk

`func (o *FileDeliveryConfigType) GetRetryIntervalOk() (*float32, bool)`

GetRetryIntervalOk returns a tuple with the RetryInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryInterval

`func (o *FileDeliveryConfigType) SetRetryInterval(v float32)`

SetRetryInterval sets RetryInterval field to given value.

### HasRetryInterval

`func (o *FileDeliveryConfigType) HasRetryInterval() bool`

HasRetryInterval returns a boolean if a field has been set.

### GetSOAPAction

`func (o *FileDeliveryConfigType) GetSOAPAction() string`

GetSOAPAction returns the SOAPAction field if non-nil, zero value otherwise.

### GetSOAPActionOk

`func (o *FileDeliveryConfigType) GetSOAPActionOk() (*string, bool)`

GetSOAPActionOk returns a tuple with the SOAPAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSOAPAction

`func (o *FileDeliveryConfigType) SetSOAPAction(v string)`

SetSOAPAction sets SOAPAction field to given value.

### HasSOAPAction

`func (o *FileDeliveryConfigType) HasSOAPAction() bool`

HasSOAPAction returns a boolean if a field has been set.

### GetSOAPVersion

`func (o *FileDeliveryConfigType) GetSOAPVersion() string`

GetSOAPVersion returns the SOAPVersion field if non-nil, zero value otherwise.

### GetSOAPVersionOk

`func (o *FileDeliveryConfigType) GetSOAPVersionOk() (*string, bool)`

GetSOAPVersionOk returns a tuple with the SOAPVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSOAPVersion

`func (o *FileDeliveryConfigType) SetSOAPVersion(v string)`

SetSOAPVersion sets SOAPVersion field to given value.

### HasSOAPVersion

`func (o *FileDeliveryConfigType) HasSOAPVersion() bool`

HasSOAPVersion returns a boolean if a field has been set.

### GetTempDirectory

`func (o *FileDeliveryConfigType) GetTempDirectory() string`

GetTempDirectory returns the TempDirectory field if non-nil, zero value otherwise.

### GetTempDirectoryOk

`func (o *FileDeliveryConfigType) GetTempDirectoryOk() (*string, bool)`

GetTempDirectoryOk returns a tuple with the TempDirectory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTempDirectory

`func (o *FileDeliveryConfigType) SetTempDirectory(v string)`

SetTempDirectory sets TempDirectory field to given value.

### HasTempDirectory

`func (o *FileDeliveryConfigType) HasTempDirectory() bool`

HasTempDirectory returns a boolean if a field has been set.

### GetUseAsciiTransfer

`func (o *FileDeliveryConfigType) GetUseAsciiTransfer() bool`

GetUseAsciiTransfer returns the UseAsciiTransfer field if non-nil, zero value otherwise.

### GetUseAsciiTransferOk

`func (o *FileDeliveryConfigType) GetUseAsciiTransferOk() (*bool, bool)`

GetUseAsciiTransferOk returns a tuple with the UseAsciiTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAsciiTransfer

`func (o *FileDeliveryConfigType) SetUseAsciiTransfer(v bool)`

SetUseAsciiTransfer sets UseAsciiTransfer field to given value.

### HasUseAsciiTransfer

`func (o *FileDeliveryConfigType) HasUseAsciiTransfer() bool`

HasUseAsciiTransfer returns a boolean if a field has been set.

### GetUseSOAPProtocol

`func (o *FileDeliveryConfigType) GetUseSOAPProtocol() bool`

GetUseSOAPProtocol returns the UseSOAPProtocol field if non-nil, zero value otherwise.

### GetUseSOAPProtocolOk

`func (o *FileDeliveryConfigType) GetUseSOAPProtocolOk() (*bool, bool)`

GetUseSOAPProtocolOk returns a tuple with the UseSOAPProtocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSOAPProtocol

`func (o *FileDeliveryConfigType) SetUseSOAPProtocol(v bool)`

SetUseSOAPProtocol sets UseSOAPProtocol field to given value.

### HasUseSOAPProtocol

`func (o *FileDeliveryConfigType) HasUseSOAPProtocol() bool`

HasUseSOAPProtocol returns a boolean if a field has been set.

### GetUserId

`func (o *FileDeliveryConfigType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *FileDeliveryConfigType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *FileDeliveryConfigType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *FileDeliveryConfigType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetValidAuthentication

`func (o *FileDeliveryConfigType) GetValidAuthentication() bool`

GetValidAuthentication returns the ValidAuthentication field if non-nil, zero value otherwise.

### GetValidAuthenticationOk

`func (o *FileDeliveryConfigType) GetValidAuthenticationOk() (*bool, bool)`

GetValidAuthenticationOk returns a tuple with the ValidAuthentication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidAuthentication

`func (o *FileDeliveryConfigType) SetValidAuthentication(v bool)`

SetValidAuthentication sets ValidAuthentication field to given value.

### HasValidAuthentication

`func (o *FileDeliveryConfigType) HasValidAuthentication() bool`

HasValidAuthentication returns a boolean if a field has been set.

### GetValidUpdateDate

`func (o *FileDeliveryConfigType) GetValidUpdateDate() string`

GetValidUpdateDate returns the ValidUpdateDate field if non-nil, zero value otherwise.

### GetValidUpdateDateOk

`func (o *FileDeliveryConfigType) GetValidUpdateDateOk() (*string, bool)`

GetValidUpdateDateOk returns a tuple with the ValidUpdateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidUpdateDate

`func (o *FileDeliveryConfigType) SetValidUpdateDate(v string)`

SetValidUpdateDate sets ValidUpdateDate field to given value.

### HasValidUpdateDate

`func (o *FileDeliveryConfigType) HasValidUpdateDate() bool`

HasValidUpdateDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


