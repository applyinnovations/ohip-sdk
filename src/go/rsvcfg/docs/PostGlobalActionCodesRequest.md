# PostGlobalActionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GlobalActionCodes** | Pointer to [**GlobalActionCodesType**](GlobalActionCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostGlobalActionCodesRequest

`func NewPostGlobalActionCodesRequest() *PostGlobalActionCodesRequest`

NewPostGlobalActionCodesRequest instantiates a new PostGlobalActionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGlobalActionCodesRequestWithDefaults

`func NewPostGlobalActionCodesRequestWithDefaults() *PostGlobalActionCodesRequest`

NewPostGlobalActionCodesRequestWithDefaults instantiates a new PostGlobalActionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGlobalActionCodes

`func (o *PostGlobalActionCodesRequest) GetGlobalActionCodes() GlobalActionCodesType`

GetGlobalActionCodes returns the GlobalActionCodes field if non-nil, zero value otherwise.

### GetGlobalActionCodesOk

`func (o *PostGlobalActionCodesRequest) GetGlobalActionCodesOk() (*GlobalActionCodesType, bool)`

GetGlobalActionCodesOk returns a tuple with the GlobalActionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalActionCodes

`func (o *PostGlobalActionCodesRequest) SetGlobalActionCodes(v GlobalActionCodesType)`

SetGlobalActionCodes sets GlobalActionCodes field to given value.

### HasGlobalActionCodes

`func (o *PostGlobalActionCodesRequest) HasGlobalActionCodes() bool`

HasGlobalActionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostGlobalActionCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGlobalActionCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGlobalActionCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGlobalActionCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGlobalActionCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGlobalActionCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGlobalActionCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGlobalActionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


