# ExportDestinationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EncryptionKey** | Pointer to **string** | Key that will be used during export file encryption; this is only needed if an Encryption Type has been specified. | [optional] 
**EncryptionType** | Pointer to **string** | Name of an encryption algorithm that will be used to encrypt an export file upon generation. This is used for the Default transport method. | [optional] 
**FileDeliveryConfig** | Pointer to [**FileDeliveryConfigType**](FileDeliveryConfigType.md) |  | [optional] 
**FileExtension** | Pointer to **string** | Formula used to generate the extension of the export file. | [optional] 
**FileName** | Pointer to **string** | Formula used to generate the name of the export file. | [optional] 
**HttpAddress** | Pointer to **string** | URL address of HTTP server which received export file. | [optional] 
**OXIInterfaceId** | Pointer to **string** | Interface ID from OXI, required if UploadType is not available. | [optional] 
**Protocol** | Pointer to **string** | Protocol used to upload the export file to HTTP server. | [optional] 
**SOAPActionInformation** | Pointer to **string** | Soap Action information if SOAP protocol is used to upload the export file. | [optional] 
**TransportMethod** | Pointer to [**TransportMethodType**](TransportMethodType.md) |  | [optional] 
**UploadType** | Pointer to **string** | Protocol used to upload the export file to FTP server. | [optional] 
**UseOXIInterface** | Pointer to **bool** | Specify if the OXI interface will be used for export file delivery. | [optional] 
**XMLDocumentName** | Pointer to **string** | Main tag for the XML document. | [optional] 
**ZipFileLocation** | Pointer to **string** | The zip file location where the zip file is saved after being generated. | [optional] 
**ZipFileName** | Pointer to **string** | The zip file name based on the formula used in the setup. | [optional] 

## Methods

### NewExportDestinationType

`func NewExportDestinationType() *ExportDestinationType`

NewExportDestinationType instantiates a new ExportDestinationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportDestinationTypeWithDefaults

`func NewExportDestinationTypeWithDefaults() *ExportDestinationType`

NewExportDestinationTypeWithDefaults instantiates a new ExportDestinationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEncryptionKey

`func (o *ExportDestinationType) GetEncryptionKey() string`

GetEncryptionKey returns the EncryptionKey field if non-nil, zero value otherwise.

### GetEncryptionKeyOk

`func (o *ExportDestinationType) GetEncryptionKeyOk() (*string, bool)`

GetEncryptionKeyOk returns a tuple with the EncryptionKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptionKey

`func (o *ExportDestinationType) SetEncryptionKey(v string)`

SetEncryptionKey sets EncryptionKey field to given value.

### HasEncryptionKey

`func (o *ExportDestinationType) HasEncryptionKey() bool`

HasEncryptionKey returns a boolean if a field has been set.

### GetEncryptionType

`func (o *ExportDestinationType) GetEncryptionType() string`

GetEncryptionType returns the EncryptionType field if non-nil, zero value otherwise.

### GetEncryptionTypeOk

`func (o *ExportDestinationType) GetEncryptionTypeOk() (*string, bool)`

GetEncryptionTypeOk returns a tuple with the EncryptionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptionType

`func (o *ExportDestinationType) SetEncryptionType(v string)`

SetEncryptionType sets EncryptionType field to given value.

### HasEncryptionType

`func (o *ExportDestinationType) HasEncryptionType() bool`

HasEncryptionType returns a boolean if a field has been set.

### GetFileDeliveryConfig

`func (o *ExportDestinationType) GetFileDeliveryConfig() FileDeliveryConfigType`

GetFileDeliveryConfig returns the FileDeliveryConfig field if non-nil, zero value otherwise.

### GetFileDeliveryConfigOk

`func (o *ExportDestinationType) GetFileDeliveryConfigOk() (*FileDeliveryConfigType, bool)`

GetFileDeliveryConfigOk returns a tuple with the FileDeliveryConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileDeliveryConfig

`func (o *ExportDestinationType) SetFileDeliveryConfig(v FileDeliveryConfigType)`

SetFileDeliveryConfig sets FileDeliveryConfig field to given value.

### HasFileDeliveryConfig

`func (o *ExportDestinationType) HasFileDeliveryConfig() bool`

HasFileDeliveryConfig returns a boolean if a field has been set.

### GetFileExtension

`func (o *ExportDestinationType) GetFileExtension() string`

GetFileExtension returns the FileExtension field if non-nil, zero value otherwise.

### GetFileExtensionOk

`func (o *ExportDestinationType) GetFileExtensionOk() (*string, bool)`

GetFileExtensionOk returns a tuple with the FileExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExtension

`func (o *ExportDestinationType) SetFileExtension(v string)`

SetFileExtension sets FileExtension field to given value.

### HasFileExtension

`func (o *ExportDestinationType) HasFileExtension() bool`

HasFileExtension returns a boolean if a field has been set.

### GetFileName

`func (o *ExportDestinationType) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *ExportDestinationType) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *ExportDestinationType) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *ExportDestinationType) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetHttpAddress

`func (o *ExportDestinationType) GetHttpAddress() string`

GetHttpAddress returns the HttpAddress field if non-nil, zero value otherwise.

### GetHttpAddressOk

`func (o *ExportDestinationType) GetHttpAddressOk() (*string, bool)`

GetHttpAddressOk returns a tuple with the HttpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpAddress

`func (o *ExportDestinationType) SetHttpAddress(v string)`

SetHttpAddress sets HttpAddress field to given value.

### HasHttpAddress

`func (o *ExportDestinationType) HasHttpAddress() bool`

HasHttpAddress returns a boolean if a field has been set.

### GetOXIInterfaceId

`func (o *ExportDestinationType) GetOXIInterfaceId() string`

GetOXIInterfaceId returns the OXIInterfaceId field if non-nil, zero value otherwise.

### GetOXIInterfaceIdOk

`func (o *ExportDestinationType) GetOXIInterfaceIdOk() (*string, bool)`

GetOXIInterfaceIdOk returns a tuple with the OXIInterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOXIInterfaceId

`func (o *ExportDestinationType) SetOXIInterfaceId(v string)`

SetOXIInterfaceId sets OXIInterfaceId field to given value.

### HasOXIInterfaceId

`func (o *ExportDestinationType) HasOXIInterfaceId() bool`

HasOXIInterfaceId returns a boolean if a field has been set.

### GetProtocol

`func (o *ExportDestinationType) GetProtocol() string`

GetProtocol returns the Protocol field if non-nil, zero value otherwise.

### GetProtocolOk

`func (o *ExportDestinationType) GetProtocolOk() (*string, bool)`

GetProtocolOk returns a tuple with the Protocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocol

`func (o *ExportDestinationType) SetProtocol(v string)`

SetProtocol sets Protocol field to given value.

### HasProtocol

`func (o *ExportDestinationType) HasProtocol() bool`

HasProtocol returns a boolean if a field has been set.

### GetSOAPActionInformation

`func (o *ExportDestinationType) GetSOAPActionInformation() string`

GetSOAPActionInformation returns the SOAPActionInformation field if non-nil, zero value otherwise.

### GetSOAPActionInformationOk

`func (o *ExportDestinationType) GetSOAPActionInformationOk() (*string, bool)`

GetSOAPActionInformationOk returns a tuple with the SOAPActionInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSOAPActionInformation

`func (o *ExportDestinationType) SetSOAPActionInformation(v string)`

SetSOAPActionInformation sets SOAPActionInformation field to given value.

### HasSOAPActionInformation

`func (o *ExportDestinationType) HasSOAPActionInformation() bool`

HasSOAPActionInformation returns a boolean if a field has been set.

### GetTransportMethod

`func (o *ExportDestinationType) GetTransportMethod() TransportMethodType`

GetTransportMethod returns the TransportMethod field if non-nil, zero value otherwise.

### GetTransportMethodOk

`func (o *ExportDestinationType) GetTransportMethodOk() (*TransportMethodType, bool)`

GetTransportMethodOk returns a tuple with the TransportMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportMethod

`func (o *ExportDestinationType) SetTransportMethod(v TransportMethodType)`

SetTransportMethod sets TransportMethod field to given value.

### HasTransportMethod

`func (o *ExportDestinationType) HasTransportMethod() bool`

HasTransportMethod returns a boolean if a field has been set.

### GetUploadType

`func (o *ExportDestinationType) GetUploadType() string`

GetUploadType returns the UploadType field if non-nil, zero value otherwise.

### GetUploadTypeOk

`func (o *ExportDestinationType) GetUploadTypeOk() (*string, bool)`

GetUploadTypeOk returns a tuple with the UploadType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadType

`func (o *ExportDestinationType) SetUploadType(v string)`

SetUploadType sets UploadType field to given value.

### HasUploadType

`func (o *ExportDestinationType) HasUploadType() bool`

HasUploadType returns a boolean if a field has been set.

### GetUseOXIInterface

`func (o *ExportDestinationType) GetUseOXIInterface() bool`

GetUseOXIInterface returns the UseOXIInterface field if non-nil, zero value otherwise.

### GetUseOXIInterfaceOk

`func (o *ExportDestinationType) GetUseOXIInterfaceOk() (*bool, bool)`

GetUseOXIInterfaceOk returns a tuple with the UseOXIInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseOXIInterface

`func (o *ExportDestinationType) SetUseOXIInterface(v bool)`

SetUseOXIInterface sets UseOXIInterface field to given value.

### HasUseOXIInterface

`func (o *ExportDestinationType) HasUseOXIInterface() bool`

HasUseOXIInterface returns a boolean if a field has been set.

### GetXMLDocumentName

`func (o *ExportDestinationType) GetXMLDocumentName() string`

GetXMLDocumentName returns the XMLDocumentName field if non-nil, zero value otherwise.

### GetXMLDocumentNameOk

`func (o *ExportDestinationType) GetXMLDocumentNameOk() (*string, bool)`

GetXMLDocumentNameOk returns a tuple with the XMLDocumentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLDocumentName

`func (o *ExportDestinationType) SetXMLDocumentName(v string)`

SetXMLDocumentName sets XMLDocumentName field to given value.

### HasXMLDocumentName

`func (o *ExportDestinationType) HasXMLDocumentName() bool`

HasXMLDocumentName returns a boolean if a field has been set.

### GetZipFileLocation

`func (o *ExportDestinationType) GetZipFileLocation() string`

GetZipFileLocation returns the ZipFileLocation field if non-nil, zero value otherwise.

### GetZipFileLocationOk

`func (o *ExportDestinationType) GetZipFileLocationOk() (*string, bool)`

GetZipFileLocationOk returns a tuple with the ZipFileLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipFileLocation

`func (o *ExportDestinationType) SetZipFileLocation(v string)`

SetZipFileLocation sets ZipFileLocation field to given value.

### HasZipFileLocation

`func (o *ExportDestinationType) HasZipFileLocation() bool`

HasZipFileLocation returns a boolean if a field has been set.

### GetZipFileName

`func (o *ExportDestinationType) GetZipFileName() string`

GetZipFileName returns the ZipFileName field if non-nil, zero value otherwise.

### GetZipFileNameOk

`func (o *ExportDestinationType) GetZipFileNameOk() (*string, bool)`

GetZipFileNameOk returns a tuple with the ZipFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipFileName

`func (o *ExportDestinationType) SetZipFileName(v string)`

SetZipFileName sets ZipFileName field to given value.

### HasZipFileName

`func (o *ExportDestinationType) HasZipFileName() bool`

HasZipFileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


