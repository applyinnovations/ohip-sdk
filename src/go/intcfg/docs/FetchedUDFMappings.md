# FetchedUDFMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**UDFMappings** | Pointer to [**[]UDFMappingType**](UDFMappingType.md) | Criteria for fetching UDFs. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewFetchedUDFMappings

`func NewFetchedUDFMappings() *FetchedUDFMappings`

NewFetchedUDFMappings instantiates a new FetchedUDFMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedUDFMappingsWithDefaults

`func NewFetchedUDFMappingsWithDefaults() *FetchedUDFMappings`

NewFetchedUDFMappingsWithDefaults instantiates a new FetchedUDFMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FetchedUDFMappings) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedUDFMappings) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedUDFMappings) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedUDFMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUDFMappings

`func (o *FetchedUDFMappings) GetUDFMappings() []UDFMappingType`

GetUDFMappings returns the UDFMappings field if non-nil, zero value otherwise.

### GetUDFMappingsOk

`func (o *FetchedUDFMappings) GetUDFMappingsOk() (*[]UDFMappingType, bool)`

GetUDFMappingsOk returns a tuple with the UDFMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFMappings

`func (o *FetchedUDFMappings) SetUDFMappings(v []UDFMappingType)`

SetUDFMappings sets UDFMappings field to given value.

### HasUDFMappings

`func (o *FetchedUDFMappings) HasUDFMappings() bool`

HasUDFMappings returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedUDFMappings) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedUDFMappings) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedUDFMappings) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedUDFMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


