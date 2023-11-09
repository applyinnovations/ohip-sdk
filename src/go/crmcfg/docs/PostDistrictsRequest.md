# PostDistrictsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Districts** | Pointer to [**DistrictsType**](DistrictsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostDistrictsRequest

`func NewPostDistrictsRequest() *PostDistrictsRequest`

NewPostDistrictsRequest instantiates a new PostDistrictsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostDistrictsRequestWithDefaults

`func NewPostDistrictsRequestWithDefaults() *PostDistrictsRequest`

NewPostDistrictsRequestWithDefaults instantiates a new PostDistrictsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistricts

`func (o *PostDistrictsRequest) GetDistricts() DistrictsType`

GetDistricts returns the Districts field if non-nil, zero value otherwise.

### GetDistrictsOk

`func (o *PostDistrictsRequest) GetDistrictsOk() (*DistrictsType, bool)`

GetDistrictsOk returns a tuple with the Districts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistricts

`func (o *PostDistrictsRequest) SetDistricts(v DistrictsType)`

SetDistricts sets Districts field to given value.

### HasDistricts

`func (o *PostDistrictsRequest) HasDistricts() bool`

HasDistricts returns a boolean if a field has been set.

### GetLinks

`func (o *PostDistrictsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostDistrictsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostDistrictsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostDistrictsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostDistrictsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostDistrictsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostDistrictsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostDistrictsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


