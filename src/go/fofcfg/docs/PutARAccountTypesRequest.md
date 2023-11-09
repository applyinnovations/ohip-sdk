# PutARAccountTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountTypes** | Pointer to [**ARAccountTypesType**](ARAccountTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutARAccountTypesRequest

`func NewPutARAccountTypesRequest() *PutARAccountTypesRequest`

NewPutARAccountTypesRequest instantiates a new PutARAccountTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutARAccountTypesRequestWithDefaults

`func NewPutARAccountTypesRequestWithDefaults() *PutARAccountTypesRequest`

NewPutARAccountTypesRequestWithDefaults instantiates a new PutARAccountTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountTypes

`func (o *PutARAccountTypesRequest) GetAccountTypes() ARAccountTypesType`

GetAccountTypes returns the AccountTypes field if non-nil, zero value otherwise.

### GetAccountTypesOk

`func (o *PutARAccountTypesRequest) GetAccountTypesOk() (*ARAccountTypesType, bool)`

GetAccountTypesOk returns a tuple with the AccountTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypes

`func (o *PutARAccountTypesRequest) SetAccountTypes(v ARAccountTypesType)`

SetAccountTypes sets AccountTypes field to given value.

### HasAccountTypes

`func (o *PutARAccountTypesRequest) HasAccountTypes() bool`

HasAccountTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutARAccountTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutARAccountTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutARAccountTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutARAccountTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutARAccountTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutARAccountTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutARAccountTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutARAccountTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


