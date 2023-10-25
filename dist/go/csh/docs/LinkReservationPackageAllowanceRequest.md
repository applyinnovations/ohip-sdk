# LinkReservationPackageAllowanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsumeSharedAllowances** | Pointer to **bool** | If set to TRUE, the source reservation contributes its allowance(s) to the linked allowance pool and is able to draw from the allowances of the target reservation and/or any other source rooms linked to the target room. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**LinkFromReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LinkToReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLinkReservationPackageAllowanceRequest

`func NewLinkReservationPackageAllowanceRequest() *LinkReservationPackageAllowanceRequest`

NewLinkReservationPackageAllowanceRequest instantiates a new LinkReservationPackageAllowanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkReservationPackageAllowanceRequestWithDefaults

`func NewLinkReservationPackageAllowanceRequestWithDefaults() *LinkReservationPackageAllowanceRequest`

NewLinkReservationPackageAllowanceRequestWithDefaults instantiates a new LinkReservationPackageAllowanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumeSharedAllowances

`func (o *LinkReservationPackageAllowanceRequest) GetConsumeSharedAllowances() bool`

GetConsumeSharedAllowances returns the ConsumeSharedAllowances field if non-nil, zero value otherwise.

### GetConsumeSharedAllowancesOk

`func (o *LinkReservationPackageAllowanceRequest) GetConsumeSharedAllowancesOk() (*bool, bool)`

GetConsumeSharedAllowancesOk returns a tuple with the ConsumeSharedAllowances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumeSharedAllowances

`func (o *LinkReservationPackageAllowanceRequest) SetConsumeSharedAllowances(v bool)`

SetConsumeSharedAllowances sets ConsumeSharedAllowances field to given value.

### HasConsumeSharedAllowances

`func (o *LinkReservationPackageAllowanceRequest) HasConsumeSharedAllowances() bool`

HasConsumeSharedAllowances returns a boolean if a field has been set.

### GetHotelId

`func (o *LinkReservationPackageAllowanceRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LinkReservationPackageAllowanceRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LinkReservationPackageAllowanceRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LinkReservationPackageAllowanceRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinkFromReservationId

`func (o *LinkReservationPackageAllowanceRequest) GetLinkFromReservationId() UniqueIDType`

GetLinkFromReservationId returns the LinkFromReservationId field if non-nil, zero value otherwise.

### GetLinkFromReservationIdOk

`func (o *LinkReservationPackageAllowanceRequest) GetLinkFromReservationIdOk() (*UniqueIDType, bool)`

GetLinkFromReservationIdOk returns a tuple with the LinkFromReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkFromReservationId

`func (o *LinkReservationPackageAllowanceRequest) SetLinkFromReservationId(v UniqueIDType)`

SetLinkFromReservationId sets LinkFromReservationId field to given value.

### HasLinkFromReservationId

`func (o *LinkReservationPackageAllowanceRequest) HasLinkFromReservationId() bool`

HasLinkFromReservationId returns a boolean if a field has been set.

### GetLinkToReservationId

`func (o *LinkReservationPackageAllowanceRequest) GetLinkToReservationId() UniqueIDType`

GetLinkToReservationId returns the LinkToReservationId field if non-nil, zero value otherwise.

### GetLinkToReservationIdOk

`func (o *LinkReservationPackageAllowanceRequest) GetLinkToReservationIdOk() (*UniqueIDType, bool)`

GetLinkToReservationIdOk returns a tuple with the LinkToReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkToReservationId

`func (o *LinkReservationPackageAllowanceRequest) SetLinkToReservationId(v UniqueIDType)`

SetLinkToReservationId sets LinkToReservationId field to given value.

### HasLinkToReservationId

`func (o *LinkReservationPackageAllowanceRequest) HasLinkToReservationId() bool`

HasLinkToReservationId returns a boolean if a field has been set.

### GetLinks

`func (o *LinkReservationPackageAllowanceRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkReservationPackageAllowanceRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkReservationPackageAllowanceRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkReservationPackageAllowanceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkReservationPackageAllowanceRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkReservationPackageAllowanceRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkReservationPackageAllowanceRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkReservationPackageAllowanceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


