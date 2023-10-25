# PutAutoFolioSettlementTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoFolioSettlementTypes** | Pointer to [**[]AutoFolioSettlementTypeType**](AutoFolioSettlementTypeType.md) | List of Auto Folio Settlement Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAutoFolioSettlementTypesRequest

`func NewPutAutoFolioSettlementTypesRequest() *PutAutoFolioSettlementTypesRequest`

NewPutAutoFolioSettlementTypesRequest instantiates a new PutAutoFolioSettlementTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAutoFolioSettlementTypesRequestWithDefaults

`func NewPutAutoFolioSettlementTypesRequestWithDefaults() *PutAutoFolioSettlementTypesRequest`

NewPutAutoFolioSettlementTypesRequestWithDefaults instantiates a new PutAutoFolioSettlementTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoFolioSettlementTypes

`func (o *PutAutoFolioSettlementTypesRequest) GetAutoFolioSettlementTypes() []AutoFolioSettlementTypeType`

GetAutoFolioSettlementTypes returns the AutoFolioSettlementTypes field if non-nil, zero value otherwise.

### GetAutoFolioSettlementTypesOk

`func (o *PutAutoFolioSettlementTypesRequest) GetAutoFolioSettlementTypesOk() (*[]AutoFolioSettlementTypeType, bool)`

GetAutoFolioSettlementTypesOk returns a tuple with the AutoFolioSettlementTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoFolioSettlementTypes

`func (o *PutAutoFolioSettlementTypesRequest) SetAutoFolioSettlementTypes(v []AutoFolioSettlementTypeType)`

SetAutoFolioSettlementTypes sets AutoFolioSettlementTypes field to given value.

### HasAutoFolioSettlementTypes

`func (o *PutAutoFolioSettlementTypesRequest) HasAutoFolioSettlementTypes() bool`

HasAutoFolioSettlementTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutAutoFolioSettlementTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAutoFolioSettlementTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAutoFolioSettlementTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAutoFolioSettlementTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAutoFolioSettlementTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAutoFolioSettlementTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAutoFolioSettlementTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAutoFolioSettlementTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


