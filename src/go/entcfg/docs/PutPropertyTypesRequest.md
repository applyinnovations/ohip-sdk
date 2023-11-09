# PutPropertyTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PropertyTypes** | Pointer to [**PropertyTypesType**](PropertyTypesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutPropertyTypesRequest

`func NewPutPropertyTypesRequest() *PutPropertyTypesRequest`

NewPutPropertyTypesRequest instantiates a new PutPropertyTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPropertyTypesRequestWithDefaults

`func NewPutPropertyTypesRequestWithDefaults() *PutPropertyTypesRequest`

NewPutPropertyTypesRequestWithDefaults instantiates a new PutPropertyTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPropertyTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPropertyTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPropertyTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPropertyTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPropertyTypes

`func (o *PutPropertyTypesRequest) GetPropertyTypes() PropertyTypesType`

GetPropertyTypes returns the PropertyTypes field if non-nil, zero value otherwise.

### GetPropertyTypesOk

`func (o *PutPropertyTypesRequest) GetPropertyTypesOk() (*PropertyTypesType, bool)`

GetPropertyTypesOk returns a tuple with the PropertyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyTypes

`func (o *PutPropertyTypesRequest) SetPropertyTypes(v PropertyTypesType)`

SetPropertyTypes sets PropertyTypes field to given value.

### HasPropertyTypes

`func (o *PutPropertyTypesRequest) HasPropertyTypes() bool`

HasPropertyTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPropertyTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPropertyTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPropertyTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPropertyTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


