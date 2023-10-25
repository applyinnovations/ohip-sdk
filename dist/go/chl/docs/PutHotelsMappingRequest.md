# PutHotelsMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Properties** | Pointer to [**[]PropertyMappingType**](PropertyMappingType.md) | Information about an external property mapping. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutHotelsMappingRequest

`func NewPutHotelsMappingRequest() *PutHotelsMappingRequest`

NewPutHotelsMappingRequest instantiates a new PutHotelsMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutHotelsMappingRequestWithDefaults

`func NewPutHotelsMappingRequestWithDefaults() *PutHotelsMappingRequest`

NewPutHotelsMappingRequestWithDefaults instantiates a new PutHotelsMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutHotelsMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutHotelsMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutHotelsMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutHotelsMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProperties

`func (o *PutHotelsMappingRequest) GetProperties() []PropertyMappingType`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *PutHotelsMappingRequest) GetPropertiesOk() (*[]PropertyMappingType, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *PutHotelsMappingRequest) SetProperties(v []PropertyMappingType)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *PutHotelsMappingRequest) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetWarnings

`func (o *PutHotelsMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutHotelsMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutHotelsMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutHotelsMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


