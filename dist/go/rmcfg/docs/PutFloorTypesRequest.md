# PutFloorTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FloorTypes** | Pointer to [**[]FloorTypeType**](FloorTypeType.md) | List of Floor Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutFloorTypesRequest

`func NewPutFloorTypesRequest() *PutFloorTypesRequest`

NewPutFloorTypesRequest instantiates a new PutFloorTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutFloorTypesRequestWithDefaults

`func NewPutFloorTypesRequestWithDefaults() *PutFloorTypesRequest`

NewPutFloorTypesRequestWithDefaults instantiates a new PutFloorTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFloorTypes

`func (o *PutFloorTypesRequest) GetFloorTypes() []FloorTypeType`

GetFloorTypes returns the FloorTypes field if non-nil, zero value otherwise.

### GetFloorTypesOk

`func (o *PutFloorTypesRequest) GetFloorTypesOk() (*[]FloorTypeType, bool)`

GetFloorTypesOk returns a tuple with the FloorTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorTypes

`func (o *PutFloorTypesRequest) SetFloorTypes(v []FloorTypeType)`

SetFloorTypes sets FloorTypes field to given value.

### HasFloorTypes

`func (o *PutFloorTypesRequest) HasFloorTypes() bool`

HasFloorTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutFloorTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutFloorTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutFloorTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutFloorTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutFloorTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutFloorTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutFloorTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutFloorTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


