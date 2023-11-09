# PostCustomChargesConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCharges** | Pointer to [**CustomChargesType**](CustomChargesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCustomChargesConfigRequest

`func NewPostCustomChargesConfigRequest() *PostCustomChargesConfigRequest`

NewPostCustomChargesConfigRequest instantiates a new PostCustomChargesConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCustomChargesConfigRequestWithDefaults

`func NewPostCustomChargesConfigRequestWithDefaults() *PostCustomChargesConfigRequest`

NewPostCustomChargesConfigRequestWithDefaults instantiates a new PostCustomChargesConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCharges

`func (o *PostCustomChargesConfigRequest) GetCustomCharges() CustomChargesType`

GetCustomCharges returns the CustomCharges field if non-nil, zero value otherwise.

### GetCustomChargesOk

`func (o *PostCustomChargesConfigRequest) GetCustomChargesOk() (*CustomChargesType, bool)`

GetCustomChargesOk returns a tuple with the CustomCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCharges

`func (o *PostCustomChargesConfigRequest) SetCustomCharges(v CustomChargesType)`

SetCustomCharges sets CustomCharges field to given value.

### HasCustomCharges

`func (o *PostCustomChargesConfigRequest) HasCustomCharges() bool`

HasCustomCharges returns a boolean if a field has been set.

### GetLinks

`func (o *PostCustomChargesConfigRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCustomChargesConfigRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCustomChargesConfigRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCustomChargesConfigRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCustomChargesConfigRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCustomChargesConfigRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCustomChargesConfigRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCustomChargesConfigRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


