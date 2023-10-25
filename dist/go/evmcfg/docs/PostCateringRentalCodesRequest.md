# PostCateringRentalCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RentalCodes** | Pointer to [**[]CateringCodeType**](CateringCodeType.md) | Catering Code details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCateringRentalCodesRequest

`func NewPostCateringRentalCodesRequest() *PostCateringRentalCodesRequest`

NewPostCateringRentalCodesRequest instantiates a new PostCateringRentalCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringRentalCodesRequestWithDefaults

`func NewPostCateringRentalCodesRequestWithDefaults() *PostCateringRentalCodesRequest`

NewPostCateringRentalCodesRequestWithDefaults instantiates a new PostCateringRentalCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostCateringRentalCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringRentalCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringRentalCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringRentalCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRentalCodes

`func (o *PostCateringRentalCodesRequest) GetRentalCodes() []CateringCodeType`

GetRentalCodes returns the RentalCodes field if non-nil, zero value otherwise.

### GetRentalCodesOk

`func (o *PostCateringRentalCodesRequest) GetRentalCodesOk() (*[]CateringCodeType, bool)`

GetRentalCodesOk returns a tuple with the RentalCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCodes

`func (o *PostCateringRentalCodesRequest) SetRentalCodes(v []CateringCodeType)`

SetRentalCodes sets RentalCodes field to given value.

### HasRentalCodes

`func (o *PostCateringRentalCodesRequest) HasRentalCodes() bool`

HasRentalCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringRentalCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringRentalCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringRentalCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringRentalCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


