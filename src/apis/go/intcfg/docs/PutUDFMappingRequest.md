# PutUDFMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UDFMapping** | Pointer to [**UDFMappingType**](UDFMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutUDFMappingRequest

`func NewPutUDFMappingRequest() *PutUDFMappingRequest`

NewPutUDFMappingRequest instantiates a new PutUDFMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutUDFMappingRequestWithDefaults

`func NewPutUDFMappingRequestWithDefaults() *PutUDFMappingRequest`

NewPutUDFMappingRequestWithDefaults instantiates a new PutUDFMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUDFMapping

`func (o *PutUDFMappingRequest) GetUDFMapping() UDFMappingType`

GetUDFMapping returns the UDFMapping field if non-nil, zero value otherwise.

### GetUDFMappingOk

`func (o *PutUDFMappingRequest) GetUDFMappingOk() (*UDFMappingType, bool)`

GetUDFMappingOk returns a tuple with the UDFMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFMapping

`func (o *PutUDFMappingRequest) SetUDFMapping(v UDFMappingType)`

SetUDFMapping sets UDFMapping field to given value.

### HasUDFMapping

`func (o *PutUDFMappingRequest) HasUDFMapping() bool`

HasUDFMapping returns a boolean if a field has been set.

### GetLinks

`func (o *PutUDFMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutUDFMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutUDFMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutUDFMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutUDFMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutUDFMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutUDFMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutUDFMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


