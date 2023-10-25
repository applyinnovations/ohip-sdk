# PostGuestTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTypes** | Pointer to [**[]GuestTypeType**](GuestTypeType.md) | List of Guest Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostGuestTypesRequest

`func NewPostGuestTypesRequest() *PostGuestTypesRequest`

NewPostGuestTypesRequest instantiates a new PostGuestTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGuestTypesRequestWithDefaults

`func NewPostGuestTypesRequestWithDefaults() *PostGuestTypesRequest`

NewPostGuestTypesRequestWithDefaults instantiates a new PostGuestTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTypes

`func (o *PostGuestTypesRequest) GetGuestTypes() []GuestTypeType`

GetGuestTypes returns the GuestTypes field if non-nil, zero value otherwise.

### GetGuestTypesOk

`func (o *PostGuestTypesRequest) GetGuestTypesOk() (*[]GuestTypeType, bool)`

GetGuestTypesOk returns a tuple with the GuestTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTypes

`func (o *PostGuestTypesRequest) SetGuestTypes(v []GuestTypeType)`

SetGuestTypes sets GuestTypes field to given value.

### HasGuestTypes

`func (o *PostGuestTypesRequest) HasGuestTypes() bool`

HasGuestTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostGuestTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGuestTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGuestTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGuestTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGuestTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGuestTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGuestTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGuestTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


