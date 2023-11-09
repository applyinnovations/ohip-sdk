# InterfaceCustomDataInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportAsXml** | Pointer to **bool** | Specifies whether the details have to be exported as XML. If true, then the details are exported as XML else details are exported as text. | [optional] 
**IncludeDoorcardField** | Pointer to **bool** | Specifies whether the Doorcard field details have to be included in the XML Export. If true, Doorcard field details will be included in the XML Export else details will not be included. This field is available only when the Export as XML field is selected. | [optional] 
**InterfaceCustomDataDetails** | Pointer to [**InterfaceCustomDataDetailsType**](InterfaceCustomDataDetailsType.md) |  | [optional] 

## Methods

### NewInterfaceCustomDataInfoType

`func NewInterfaceCustomDataInfoType() *InterfaceCustomDataInfoType`

NewInterfaceCustomDataInfoType instantiates a new InterfaceCustomDataInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceCustomDataInfoTypeWithDefaults

`func NewInterfaceCustomDataInfoTypeWithDefaults() *InterfaceCustomDataInfoType`

NewInterfaceCustomDataInfoTypeWithDefaults instantiates a new InterfaceCustomDataInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportAsXml

`func (o *InterfaceCustomDataInfoType) GetExportAsXml() bool`

GetExportAsXml returns the ExportAsXml field if non-nil, zero value otherwise.

### GetExportAsXmlOk

`func (o *InterfaceCustomDataInfoType) GetExportAsXmlOk() (*bool, bool)`

GetExportAsXmlOk returns a tuple with the ExportAsXml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportAsXml

`func (o *InterfaceCustomDataInfoType) SetExportAsXml(v bool)`

SetExportAsXml sets ExportAsXml field to given value.

### HasExportAsXml

`func (o *InterfaceCustomDataInfoType) HasExportAsXml() bool`

HasExportAsXml returns a boolean if a field has been set.

### GetIncludeDoorcardField

`func (o *InterfaceCustomDataInfoType) GetIncludeDoorcardField() bool`

GetIncludeDoorcardField returns the IncludeDoorcardField field if non-nil, zero value otherwise.

### GetIncludeDoorcardFieldOk

`func (o *InterfaceCustomDataInfoType) GetIncludeDoorcardFieldOk() (*bool, bool)`

GetIncludeDoorcardFieldOk returns a tuple with the IncludeDoorcardField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDoorcardField

`func (o *InterfaceCustomDataInfoType) SetIncludeDoorcardField(v bool)`

SetIncludeDoorcardField sets IncludeDoorcardField field to given value.

### HasIncludeDoorcardField

`func (o *InterfaceCustomDataInfoType) HasIncludeDoorcardField() bool`

HasIncludeDoorcardField returns a boolean if a field has been set.

### GetInterfaceCustomDataDetails

`func (o *InterfaceCustomDataInfoType) GetInterfaceCustomDataDetails() InterfaceCustomDataDetailsType`

GetInterfaceCustomDataDetails returns the InterfaceCustomDataDetails field if non-nil, zero value otherwise.

### GetInterfaceCustomDataDetailsOk

`func (o *InterfaceCustomDataInfoType) GetInterfaceCustomDataDetailsOk() (*InterfaceCustomDataDetailsType, bool)`

GetInterfaceCustomDataDetailsOk returns a tuple with the InterfaceCustomDataDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceCustomDataDetails

`func (o *InterfaceCustomDataInfoType) SetInterfaceCustomDataDetails(v InterfaceCustomDataDetailsType)`

SetInterfaceCustomDataDetails sets InterfaceCustomDataDetails field to given value.

### HasInterfaceCustomDataDetails

`func (o *InterfaceCustomDataInfoType) HasInterfaceCustomDataDetails() bool`

HasInterfaceCustomDataDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


