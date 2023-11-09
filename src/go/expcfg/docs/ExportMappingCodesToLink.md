# ExportMappingCodesToLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CodesToLink** | Pointer to [**[]ExportMappingCodesToLinkType**](ExportMappingCodesToLinkType.md) | The codes for a given property which are to be linked to the mapping code. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewExportMappingCodesToLink

`func NewExportMappingCodesToLink() *ExportMappingCodesToLink`

NewExportMappingCodesToLink instantiates a new ExportMappingCodesToLink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingCodesToLinkWithDefaults

`func NewExportMappingCodesToLinkWithDefaults() *ExportMappingCodesToLink`

NewExportMappingCodesToLinkWithDefaults instantiates a new ExportMappingCodesToLink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodesToLink

`func (o *ExportMappingCodesToLink) GetCodesToLink() []ExportMappingCodesToLinkType`

GetCodesToLink returns the CodesToLink field if non-nil, zero value otherwise.

### GetCodesToLinkOk

`func (o *ExportMappingCodesToLink) GetCodesToLinkOk() (*[]ExportMappingCodesToLinkType, bool)`

GetCodesToLinkOk returns a tuple with the CodesToLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodesToLink

`func (o *ExportMappingCodesToLink) SetCodesToLink(v []ExportMappingCodesToLinkType)`

SetCodesToLink sets CodesToLink field to given value.

### HasCodesToLink

`func (o *ExportMappingCodesToLink) HasCodesToLink() bool`

HasCodesToLink returns a boolean if a field has been set.

### GetLinks

`func (o *ExportMappingCodesToLink) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportMappingCodesToLink) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportMappingCodesToLink) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportMappingCodesToLink) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportMappingCodesToLink) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportMappingCodesToLink) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportMappingCodesToLink) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportMappingCodesToLink) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


