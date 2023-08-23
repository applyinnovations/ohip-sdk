# InterfaceSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to **string** | ID of the Interface Setup | [optional] 
**HotelId** | Pointer to **string** | Property for which the Interface Setup is defined. | [optional] 
**ExternalHotelCode** | Pointer to **string** | Corresponding property in the external system | [optional] 
**Machine** | Pointer to **int32** | Logical Name of the machine that runs the OXIHUB | [optional] 
**Description** | Pointer to **string** | Detailed information about the interface. | [optional] 
**MessageFormat** | Pointer to **string** | Type of the message. (XML, TPI, AMF, etc.). | [optional] 
**XMLVersions** | Pointer to [**[]InterfaceSetupXMLVersionType**](InterfaceSetupXMLVersionType.md) | Collection of XMLTypes | [optional] 
**DatabaseId** | Pointer to **string** | Database ID | [optional] 
**InterfaceType** | Pointer to **string** | Type of the interface (UPLOAD, DOWNLOAD, EXPORT, FTCRS, HOLIDEX, etc.,). | [optional] 
**ExternalSystemActivated** | Pointer to **bool** | Indicates if external system is active | [optional] 
**SystemType** | Pointer to [**InterfaceSystemType**](InterfaceSystemType.md) |  | [optional] 
**BatchProcessBE** | Pointer to **bool** | Select for all interfaces that send data from Opera to an external system. | [optional] 
**ZipData** | Pointer to **bool** | Compress all accumulated Business Events if true. | [optional] 
**DeltaMode** | Pointer to **bool** | Indicates external system does not send the full message for changes. | [optional] 
**DeletionIndicator** | Pointer to [**InterfaceSetupMessageIndicatorType**](InterfaceSetupMessageIndicatorType.md) |  | [optional] 
**KeepingIndicator** | Pointer to [**InterfaceSetupMessageIndicatorType**](InterfaceSetupMessageIndicatorType.md) |  | [optional] 
**OrsDestination** | Pointer to **bool** | Indicates if interface is ORS destination. | [optional] 
**XmlSchemaVersionsNegotiable** | Pointer to **bool** | Indicates if XML Versions Negotiable. | [optional] 
**NegotiateXmlSchemaVersion** | Pointer to **bool** | Indicates to set all XML Versions to Max version. | [optional] 
**SetAllToVersion** | Pointer to **string** | XML Version to be used by all XLM schemas. | [optional] 

## Methods

### NewInterfaceSetupType

`func NewInterfaceSetupType() *InterfaceSetupType`

NewInterfaceSetupType instantiates a new InterfaceSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceSetupTypeWithDefaults

`func NewInterfaceSetupTypeWithDefaults() *InterfaceSetupType`

NewInterfaceSetupTypeWithDefaults instantiates a new InterfaceSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *InterfaceSetupType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *InterfaceSetupType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *InterfaceSetupType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *InterfaceSetupType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *InterfaceSetupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceSetupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceSetupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceSetupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExternalHotelCode

`func (o *InterfaceSetupType) GetExternalHotelCode() string`

GetExternalHotelCode returns the ExternalHotelCode field if non-nil, zero value otherwise.

### GetExternalHotelCodeOk

`func (o *InterfaceSetupType) GetExternalHotelCodeOk() (*string, bool)`

GetExternalHotelCodeOk returns a tuple with the ExternalHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalHotelCode

`func (o *InterfaceSetupType) SetExternalHotelCode(v string)`

SetExternalHotelCode sets ExternalHotelCode field to given value.

### HasExternalHotelCode

`func (o *InterfaceSetupType) HasExternalHotelCode() bool`

HasExternalHotelCode returns a boolean if a field has been set.

### GetMachine

`func (o *InterfaceSetupType) GetMachine() int32`

GetMachine returns the Machine field if non-nil, zero value otherwise.

### GetMachineOk

`func (o *InterfaceSetupType) GetMachineOk() (*int32, bool)`

GetMachineOk returns a tuple with the Machine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachine

`func (o *InterfaceSetupType) SetMachine(v int32)`

SetMachine sets Machine field to given value.

### HasMachine

`func (o *InterfaceSetupType) HasMachine() bool`

HasMachine returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceSetupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceSetupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceSetupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceSetupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMessageFormat

`func (o *InterfaceSetupType) GetMessageFormat() string`

GetMessageFormat returns the MessageFormat field if non-nil, zero value otherwise.

### GetMessageFormatOk

`func (o *InterfaceSetupType) GetMessageFormatOk() (*string, bool)`

GetMessageFormatOk returns a tuple with the MessageFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageFormat

`func (o *InterfaceSetupType) SetMessageFormat(v string)`

SetMessageFormat sets MessageFormat field to given value.

### HasMessageFormat

`func (o *InterfaceSetupType) HasMessageFormat() bool`

HasMessageFormat returns a boolean if a field has been set.

### GetXMLVersions

`func (o *InterfaceSetupType) GetXMLVersions() []InterfaceSetupXMLVersionType`

GetXMLVersions returns the XMLVersions field if non-nil, zero value otherwise.

### GetXMLVersionsOk

`func (o *InterfaceSetupType) GetXMLVersionsOk() (*[]InterfaceSetupXMLVersionType, bool)`

GetXMLVersionsOk returns a tuple with the XMLVersions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXMLVersions

`func (o *InterfaceSetupType) SetXMLVersions(v []InterfaceSetupXMLVersionType)`

SetXMLVersions sets XMLVersions field to given value.

### HasXMLVersions

`func (o *InterfaceSetupType) HasXMLVersions() bool`

HasXMLVersions returns a boolean if a field has been set.

### GetDatabaseId

`func (o *InterfaceSetupType) GetDatabaseId() string`

GetDatabaseId returns the DatabaseId field if non-nil, zero value otherwise.

### GetDatabaseIdOk

`func (o *InterfaceSetupType) GetDatabaseIdOk() (*string, bool)`

GetDatabaseIdOk returns a tuple with the DatabaseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseId

`func (o *InterfaceSetupType) SetDatabaseId(v string)`

SetDatabaseId sets DatabaseId field to given value.

### HasDatabaseId

`func (o *InterfaceSetupType) HasDatabaseId() bool`

HasDatabaseId returns a boolean if a field has been set.

### GetInterfaceType

`func (o *InterfaceSetupType) GetInterfaceType() string`

GetInterfaceType returns the InterfaceType field if non-nil, zero value otherwise.

### GetInterfaceTypeOk

`func (o *InterfaceSetupType) GetInterfaceTypeOk() (*string, bool)`

GetInterfaceTypeOk returns a tuple with the InterfaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceType

`func (o *InterfaceSetupType) SetInterfaceType(v string)`

SetInterfaceType sets InterfaceType field to given value.

### HasInterfaceType

`func (o *InterfaceSetupType) HasInterfaceType() bool`

HasInterfaceType returns a boolean if a field has been set.

### GetExternalSystemActivated

`func (o *InterfaceSetupType) GetExternalSystemActivated() bool`

GetExternalSystemActivated returns the ExternalSystemActivated field if non-nil, zero value otherwise.

### GetExternalSystemActivatedOk

`func (o *InterfaceSetupType) GetExternalSystemActivatedOk() (*bool, bool)`

GetExternalSystemActivatedOk returns a tuple with the ExternalSystemActivated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemActivated

`func (o *InterfaceSetupType) SetExternalSystemActivated(v bool)`

SetExternalSystemActivated sets ExternalSystemActivated field to given value.

### HasExternalSystemActivated

`func (o *InterfaceSetupType) HasExternalSystemActivated() bool`

HasExternalSystemActivated returns a boolean if a field has been set.

### GetSystemType

`func (o *InterfaceSetupType) GetSystemType() InterfaceSystemType`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *InterfaceSetupType) GetSystemTypeOk() (*InterfaceSystemType, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *InterfaceSetupType) SetSystemType(v InterfaceSystemType)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *InterfaceSetupType) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.

### GetBatchProcessBE

`func (o *InterfaceSetupType) GetBatchProcessBE() bool`

GetBatchProcessBE returns the BatchProcessBE field if non-nil, zero value otherwise.

### GetBatchProcessBEOk

`func (o *InterfaceSetupType) GetBatchProcessBEOk() (*bool, bool)`

GetBatchProcessBEOk returns a tuple with the BatchProcessBE field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchProcessBE

`func (o *InterfaceSetupType) SetBatchProcessBE(v bool)`

SetBatchProcessBE sets BatchProcessBE field to given value.

### HasBatchProcessBE

`func (o *InterfaceSetupType) HasBatchProcessBE() bool`

HasBatchProcessBE returns a boolean if a field has been set.

### GetZipData

`func (o *InterfaceSetupType) GetZipData() bool`

GetZipData returns the ZipData field if non-nil, zero value otherwise.

### GetZipDataOk

`func (o *InterfaceSetupType) GetZipDataOk() (*bool, bool)`

GetZipDataOk returns a tuple with the ZipData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipData

`func (o *InterfaceSetupType) SetZipData(v bool)`

SetZipData sets ZipData field to given value.

### HasZipData

`func (o *InterfaceSetupType) HasZipData() bool`

HasZipData returns a boolean if a field has been set.

### GetDeltaMode

`func (o *InterfaceSetupType) GetDeltaMode() bool`

GetDeltaMode returns the DeltaMode field if non-nil, zero value otherwise.

### GetDeltaModeOk

`func (o *InterfaceSetupType) GetDeltaModeOk() (*bool, bool)`

GetDeltaModeOk returns a tuple with the DeltaMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeltaMode

`func (o *InterfaceSetupType) SetDeltaMode(v bool)`

SetDeltaMode sets DeltaMode field to given value.

### HasDeltaMode

`func (o *InterfaceSetupType) HasDeltaMode() bool`

HasDeltaMode returns a boolean if a field has been set.

### GetDeletionIndicator

`func (o *InterfaceSetupType) GetDeletionIndicator() InterfaceSetupMessageIndicatorType`

GetDeletionIndicator returns the DeletionIndicator field if non-nil, zero value otherwise.

### GetDeletionIndicatorOk

`func (o *InterfaceSetupType) GetDeletionIndicatorOk() (*InterfaceSetupMessageIndicatorType, bool)`

GetDeletionIndicatorOk returns a tuple with the DeletionIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletionIndicator

`func (o *InterfaceSetupType) SetDeletionIndicator(v InterfaceSetupMessageIndicatorType)`

SetDeletionIndicator sets DeletionIndicator field to given value.

### HasDeletionIndicator

`func (o *InterfaceSetupType) HasDeletionIndicator() bool`

HasDeletionIndicator returns a boolean if a field has been set.

### GetKeepingIndicator

`func (o *InterfaceSetupType) GetKeepingIndicator() InterfaceSetupMessageIndicatorType`

GetKeepingIndicator returns the KeepingIndicator field if non-nil, zero value otherwise.

### GetKeepingIndicatorOk

`func (o *InterfaceSetupType) GetKeepingIndicatorOk() (*InterfaceSetupMessageIndicatorType, bool)`

GetKeepingIndicatorOk returns a tuple with the KeepingIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeepingIndicator

`func (o *InterfaceSetupType) SetKeepingIndicator(v InterfaceSetupMessageIndicatorType)`

SetKeepingIndicator sets KeepingIndicator field to given value.

### HasKeepingIndicator

`func (o *InterfaceSetupType) HasKeepingIndicator() bool`

HasKeepingIndicator returns a boolean if a field has been set.

### GetOrsDestination

`func (o *InterfaceSetupType) GetOrsDestination() bool`

GetOrsDestination returns the OrsDestination field if non-nil, zero value otherwise.

### GetOrsDestinationOk

`func (o *InterfaceSetupType) GetOrsDestinationOk() (*bool, bool)`

GetOrsDestinationOk returns a tuple with the OrsDestination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrsDestination

`func (o *InterfaceSetupType) SetOrsDestination(v bool)`

SetOrsDestination sets OrsDestination field to given value.

### HasOrsDestination

`func (o *InterfaceSetupType) HasOrsDestination() bool`

HasOrsDestination returns a boolean if a field has been set.

### GetXmlSchemaVersionsNegotiable

`func (o *InterfaceSetupType) GetXmlSchemaVersionsNegotiable() bool`

GetXmlSchemaVersionsNegotiable returns the XmlSchemaVersionsNegotiable field if non-nil, zero value otherwise.

### GetXmlSchemaVersionsNegotiableOk

`func (o *InterfaceSetupType) GetXmlSchemaVersionsNegotiableOk() (*bool, bool)`

GetXmlSchemaVersionsNegotiableOk returns a tuple with the XmlSchemaVersionsNegotiable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXmlSchemaVersionsNegotiable

`func (o *InterfaceSetupType) SetXmlSchemaVersionsNegotiable(v bool)`

SetXmlSchemaVersionsNegotiable sets XmlSchemaVersionsNegotiable field to given value.

### HasXmlSchemaVersionsNegotiable

`func (o *InterfaceSetupType) HasXmlSchemaVersionsNegotiable() bool`

HasXmlSchemaVersionsNegotiable returns a boolean if a field has been set.

### GetNegotiateXmlSchemaVersion

`func (o *InterfaceSetupType) GetNegotiateXmlSchemaVersion() bool`

GetNegotiateXmlSchemaVersion returns the NegotiateXmlSchemaVersion field if non-nil, zero value otherwise.

### GetNegotiateXmlSchemaVersionOk

`func (o *InterfaceSetupType) GetNegotiateXmlSchemaVersionOk() (*bool, bool)`

GetNegotiateXmlSchemaVersionOk returns a tuple with the NegotiateXmlSchemaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiateXmlSchemaVersion

`func (o *InterfaceSetupType) SetNegotiateXmlSchemaVersion(v bool)`

SetNegotiateXmlSchemaVersion sets NegotiateXmlSchemaVersion field to given value.

### HasNegotiateXmlSchemaVersion

`func (o *InterfaceSetupType) HasNegotiateXmlSchemaVersion() bool`

HasNegotiateXmlSchemaVersion returns a boolean if a field has been set.

### GetSetAllToVersion

`func (o *InterfaceSetupType) GetSetAllToVersion() string`

GetSetAllToVersion returns the SetAllToVersion field if non-nil, zero value otherwise.

### GetSetAllToVersionOk

`func (o *InterfaceSetupType) GetSetAllToVersionOk() (*string, bool)`

GetSetAllToVersionOk returns a tuple with the SetAllToVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetAllToVersion

`func (o *InterfaceSetupType) SetSetAllToVersion(v string)`

SetSetAllToVersion sets SetAllToVersion field to given value.

### HasSetAllToVersion

`func (o *InterfaceSetupType) HasSetAllToVersion() bool`

HasSetAllToVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


