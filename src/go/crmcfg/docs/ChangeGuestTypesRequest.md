# ChangeGuestTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTypes** | Pointer to [**GuestTypesType**](GuestTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeGuestTypesRequest

`func NewChangeGuestTypesRequest() *ChangeGuestTypesRequest`

NewChangeGuestTypesRequest instantiates a new ChangeGuestTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeGuestTypesRequestWithDefaults

`func NewChangeGuestTypesRequestWithDefaults() *ChangeGuestTypesRequest`

NewChangeGuestTypesRequestWithDefaults instantiates a new ChangeGuestTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTypes

`func (o *ChangeGuestTypesRequest) GetGuestTypes() GuestTypesType`

GetGuestTypes returns the GuestTypes field if non-nil, zero value otherwise.

### GetGuestTypesOk

`func (o *ChangeGuestTypesRequest) GetGuestTypesOk() (*GuestTypesType, bool)`

GetGuestTypesOk returns a tuple with the GuestTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTypes

`func (o *ChangeGuestTypesRequest) SetGuestTypes(v GuestTypesType)`

SetGuestTypes sets GuestTypes field to given value.

### HasGuestTypes

`func (o *ChangeGuestTypesRequest) HasGuestTypes() bool`

HasGuestTypes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeGuestTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeGuestTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeGuestTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeGuestTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeGuestTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeGuestTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeGuestTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeGuestTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


